from django.conf.urls import url
from .views import MainView, TestView, ProfileView, ExperienceView


urlpatterns = [
    url(r'^$', MainView.as_view()),
    url(r'^testing/', TestView.as_view()),
    url(r'^visit/Profile/$', ProfileView.as_view()),
    url(r'^visit/Experience/$', ExperienceView.as_view()),
]
