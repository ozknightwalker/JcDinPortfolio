from django.views import generic


class MainView(generic.TemplateView):
    templateName = 'templates/MainView.html'
