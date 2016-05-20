from django.conf.urls import include, url
from django.contrib import admin
from oscar.app import application
from django.conf import settings

media_root = getattr(settings, 'MEDIA_ROOT', '/media')
urlpatterns = [
    url(r'^i18n/', include('django.conf.urls.i18n')),

    # The Django admin is not officially supported; expect breakage.
    # Nonetheless, it's often useful for debugging.
    url(r'^admin/', include(admin.site.urls)),

    url(r'', include(application.urls)),
    url(r'^media/(?P<path>.*)$','django.views.static.serve',
    {'document_root': media_root})
]