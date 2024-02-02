from django.apps import AppConfig


class PollsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'polls'

# # myapp/forms.py
# from django import forms
# from .models import MyModel

# class MyModelForm(forms.ModelForm):
#     class Meta:
#         model = MyModel
#         fields = ['name', 'email']  # Add other fields as needed

