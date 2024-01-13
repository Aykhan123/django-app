from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
import requests


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def diff(request):
    return HttpResponse("Hello, world")

def bye(request):
    return HttpResponse("Goodbye!")

def get_curr_rate(request):
	from_currency="USD"
	currency="JPY"
	url =  f"https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency={from_currency}&to_currency={currency}&apikey=747ZS9QSN9N26E74"
	response = requests.get(url)
	res = response.json()
	return HttpResponse(str(res))