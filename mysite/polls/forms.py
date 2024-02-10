from  django import forms
from django.forms import ModelForm
from .models import Question

class questionForm(ModelForm):
    class Meta:
        model = Question
        fields =['question_text']

