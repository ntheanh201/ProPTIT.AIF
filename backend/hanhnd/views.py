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
            if Content.objects.get(content = content).id == None:
                Content.objects.create(mean = content)
                Questions.objects.create(content = Content.objects.get(content = content).id
                , user = owner_)


def create_answer(request, *args, **kwargs):
    if request.method == 'POST':
        content = request.POST.get("content")
        owner = request.POST.get("owner")
        owner_ = User.objects.get(username = owner)
        if (owner_ != None):
            if Content.object.get(content = content).id == None:
                Content.objects.create(mean = content)
                id_content = Content.object.get(content = content).id
                Answers.objects.create(content = id, is_contrib = True, owner = owner_)

def verified_answer(request, *args, **kwargs):
    if request.method == 'POST':
        content = request.POST.get("content")
        id_content = Content.objects.get(mean = content).id
        Answers.objects.filter(content = id).update(is_verified = True)

def submit_answer(request, *args, **kwargs):
    if request.method == 'POST':
        question, answer = request.POST.get("question", "answer")
        ques = Questions.objects.get(content = Content.objects.get(mean = question).id)
        ques.list_answers.add(Answers.objects.get(content = Content.objects.get(mean = answer).id))





        


        