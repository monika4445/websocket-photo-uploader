# app/urls.py
from django.urls import path
from .views import FileUploadView, GalleryView

urlpatterns = [
    path("upload/", FileUploadView.as_view(), name="file-upload"),
    path("gallery/", GalleryView.as_view(), name="gallery"),
]

