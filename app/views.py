from django.shortcuts import redirect, render_to_response
from django.views import generic
from django.template import RequestContext


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


def Custom500(request, template_name='500.html'):
    return render_to_response(template_name, context_instance=RequestContext(request))


def Custom400(request, template_name='404.html'):
    return render_to_response(template_name, context_instance=RequestContext(request))
