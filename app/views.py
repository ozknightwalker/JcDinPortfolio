from django.views import generic


class MainView(generic.TemplateView):
    template_name = 'MainView.html'


class TestView(generic.TemplateView):
    template_name = 'TestingView.html'


class ProfileView(generic.TemplateView):
    template_name = 'ProfileView.html'


class ExperienceView(generic.TemplateView):
    template_name = 'ExperienceView.html'
