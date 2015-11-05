from django.shortcuts import redirect
from django.views import generic


class MainView(generic.TemplateView):
    template_name = 'MainView.html'

    def dispatch(self, request, *args, **kwargs):
	    return redirect('Portfolio_main')


class TestView(generic.TemplateView):
    template_name = 'TestingView.html'


class ProfileView(generic.TemplateView):
    template_name = 'ProfileView.html'


class ExperienceView(generic.TemplateView):
    template_name = 'ExperienceView.html'


class PowerView(generic.TemplateView):
	template_name = 'PowerView.html'


class WorkView(generic.TemplateView):
	template_name = 'WorkView.html'
