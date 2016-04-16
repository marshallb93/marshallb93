from django.conf.urls import url
from django.views.generic import TemplateView

handler400 = 'pages.views.bad_request'
handler403 = 'pages.views.permission_denied'
handler404 = 'pages.views.page_not_found'
handler500 = 'pages.views.server_error'

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html'))
]