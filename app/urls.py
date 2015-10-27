from django.conf.urls import url
from .views import MainView, TestView


urlpatterns = [
    url(r'^$', MainView.as_view()),
    url(r'^testing/$', TestView.as_view()),
]
