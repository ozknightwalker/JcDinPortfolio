from django.views import generic


class MainView(generic.TemplateView):
    template_name = 'MainView.html'
