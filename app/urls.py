from django.conf.urls import url
from .views import MainView, TestView, ProfileView, ExperienceView, PowerView, WorkView


urlpatterns = [
    url(r'^$', MainView.as_view()),
    url(r'^Portfolio/', TestView.as_view(), name='Portfolio_main'),
    url(r'^visit/Profile/$', ProfileView.as_view()),
    url(r'^visit/Experience/$', ExperienceView.as_view()),
    url(r'^visit/Power/$', PowerView.as_view()),
    url(r'^visit/Work/$', WorkView.as_view()),
]
