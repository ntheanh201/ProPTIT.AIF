from django.shortcuts import render
from .models import Answers, Content, Questions
from django.contrib.auth.models import User

# Create your views here.
def create_question(request, *args, **kwargs):
    if request.method == 'POST':
        content = request.POST.get("content")
        owner = request.POST.get("owner")
        owner_ = User.object.get(username = owner)
        
        if owner != None:
            if Content.objects.get(content = content) == None:
                Content.objects.create(mean = content)
                Questions.objects.create(content = Content.objects.get(content = content)
                , user = owner_)


def create_answer(request, *args, **kwargs):
    if request.method == 'POST':
        content = request.POST.get("content")
        owner = request.POST.get("owner")
        owner_ = User.objects.get(username = owner)
        if (owner_ != None):
            if Content.object.get(content = content) == None:
                Content.objects.create(mean = content)
                Answers.objects.create(content = Content.objects.get(content = content), is_contrib = True, owner = owner_)

def verified_answer(request, *args, **kwargs):
    if request.method == 'POST':
        content = request.POST.get("content")
        Answers.objects.filter(content = Content.objects.get(mean = content)).update(is_verified = True)

def submit_answer(request, *args, **kwargs):
    if request.method == 'POST':
        question, answer = request.POST.get("question", "answer")
        ques = Questions.objects.get(content = Content.objects.get(mean = question))
        ques.list_answers.add(Answers.objects.get(content = Content.objects.get(mean = answer)))





        


        