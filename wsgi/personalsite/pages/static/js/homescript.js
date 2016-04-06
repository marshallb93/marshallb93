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
        setTimeout(showText, interval, target, message, index, interval);
    }
}

var displayFile = function (file) {
    $.get(file, function (response) {
        showText("#code", response, 0, 50);
    });
}

window.onload = function() {

    var file = "https://raw.githubusercontent.com/marshallb93/ds_coursework/master/src/main/java/Network.java";
    displayFile(file);
};