from django.shortcuts import render
from .models import Question
from django.http import HttpResponse
import requests
from .forms import questionForm


# Create your views here.

def create_question(request):
	if request.method == "POST":
		form = questionForm(request.POST)
		form.save()
	else:
		form = questionForm

	return render(request, 'questions.html', {'form': form})




def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def diff(request):
    return HttpResponse("Hello, world")

def bye(request):
    return render(request, "base.html")

def get_curr_rate(request):
	from_currency="USD"
	currency="JPY"
	url =  f"https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency={from_currency}&to_currency={currency}&apikey=747ZS9QSN9N26E74"
	response = requests.get(url)
	res = response.json()
	return HttpResponse(str(res))

def questions(request):
	item = Question.objects.all()
	return render(request, "questions.html", {"questions": item}  )