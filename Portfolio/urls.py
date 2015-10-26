from django.conf.urls import include, url
from django.contrib import admin
from app import urls as app_urls

admin.site.site_header = 'Jc Din PortFolio Admin'
admin.site.site_title = 'Jc Din PortFolio Admin'

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include(app_urls)),
]
