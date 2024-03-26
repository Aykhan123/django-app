from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("", views.index, name="diff"),
    # path("", views.index, name="create_question")
]