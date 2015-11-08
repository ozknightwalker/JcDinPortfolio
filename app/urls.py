from django.conf.urls import url
from .views import MainView, TestView, ProfileView, ExperienceView, PowerView, WorkView, Custom400, Custom500

handler500 = 'Custom500'
handler400 = 'Custom400'

urlpatterns = [
    url(r'^$', MainView.as_view()),
    url(r'^Portfolio/', TestView.as_view(), name='Portfolio_main'),
    url(r'^visit/Profile/$', ProfileView.as_view()),
    url(r'^visit/Experience/$', ExperienceView.as_view()),
    url(r'^visit/Power/$', PowerView.as_view()),
    url(r'^visit/Work/$', WorkView.as_view()),
]
