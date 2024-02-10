from django.shortcuts import render, redirect
from .models import Question
from django.http import HttpResponse
import requests
from .forms import questionForm



# Create your views here.

def create_question(request):
	if request.method == 'POST':
		question = request.POST['textInput']
		form = questionForm({"question_text":question})
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