var showing = false;
var showingFunc;

var showText = function (target, message, index, interval) {
    if (index < message.length) {
        if (message[index] == "\n") {
            $(target).append("<br />");
            index++;
        } else if (message[index] == " " && message[index+1] == " ") {
            $(target).append("&emsp;");
            index = index + 2;
        } else {
            $(target).append(message[index++]);
        }
        showingFunc = setTimeout(showText, interval, target, message, index, interval);
    } else {
        showing = false;
        clearTimeout(showingFunc);
    }
}

var displayFile = function (file) {
    $.get(file, function (response) {
        showText("#code", response, 0, 50);
    });
}

var pickRandomFile = function () {
    if (!showing) {
        showing = true;
        var files = ["https://raw.githubusercontent.com/marshallb93/ds_coursework/master/src/main/java/Network.java",
                     "https://raw.githubusercontent.com/marshallb93/pa_coursework/master/src/main/java/SimpleCache.java",
                     "https://raw.githubusercontent.com/SLIP-Group-B-2015/Raspberry_Python/master/src/main.py",
                     "https://raw.githubusercontent.com/marshallb93/personal_site/master/wsgi/personalsite/pages/templates/main_index.html",
                     "https://raw.githubusercontent.com/marshallb93/personal_site/master/wsgi/personalsite/pages/static/scss/styles.scss",
                     "https://raw.githubusercontent.com/marshallb93/es_coursework/master/working/main.c"];
        var random =  Math.floor(Math.random() * files.length);
        displayFile(files[random]);
    }
    setTimeout(pickRandomFile, 50);
}

var displayTitle = function ($title) {
     $("#link-title").text($title).stop(true,true).fadeIn();
}

window.onload = function() {
     $("#middle-box").height($("#hidden-middle-box").height());
     $("#middle-box").width($("#hidden-middle-box").width());
    setTimeout(pickRandomFile, 50);
};

$(window).resize(function() {
     $("#middle-box").height($("#hidden-middle-box").height());
     $("#middle-box").width($("#hidden-middle-box").width());
});

$(document).ready(function(){

   $("#hide").click(function(event){
     $("#visible").delay(150).fadeOut(400, function(){
        $("#hidden").fadeIn();
     });
   });

   $("#show").click(function(event){
     $("#hidden").fadeOut(400, function(){
        $("#visible").fadeIn();
     });
   });

    $("#fb").mouseenter(function() {
       displayTitle("Facebook");
    });

    $("#git").mouseenter(function() {
        displayTitle("GitHub");
    });

    $("#li").mouseenter(function() {
        displayTitle("LinkedIn");
    });

    $("#cv").mouseenter(function() {
        displayTitle("Résumé");
    });

    $("#em").mouseenter(function() {
        displayTitle("Email");
    });

    $("#hide").mouseenter(function() {
        displayTitle("About Me");
    });

    $(".link").mouseleave(function() {
        $("#link-title").stop(true,true).fadeOut();
    });

 });
