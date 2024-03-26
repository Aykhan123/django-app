from django.shortcuts import render, redirect
from .models import Question
from django.http import HttpResponse, JsonResponse
import requests
from .forms import questionForm
from django.views.decorators.csrf import csrf_exempt



# Create your views here.




def create_question(request):
	if request.method == 'POST':
		form = questionForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('/questions')
	else:
		form = questionForm()
	return render(request, 'form.html', {'form': form})


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def diff(request):
    return HttpResponse("Hello, world")

from rest_framework.decorators import api_view

@api_view(['GET'])
def bye(request):
	# print("yo", request.__dict__)
	return HttpResponse("Hello, world")

def get_curr_rate_json(request):
	from_currency="USD"
	currency="JPY"
	url =  f"https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency={from_currency}&to_currency={currency}&apikey=747ZS9QSN9N26E74"
	response = requests.get(url)
	res = response.json()
	return JsonResponse(res)

def questions(request):
	item = Question.objects.all()
	return render(request, "questions.html", {"questions": item}  )

def question_data(request):
	questions = Question.objects.all()
	serialized_questions = [question.question_text for question in questions]
	return JsonResponse({ "data": serialized_questions })