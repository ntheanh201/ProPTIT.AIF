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
            if Content.objects.filter(content = content).values("id") == None:
                Content.objects.create(mean = content)
                Questions.objects.create(content = Content.objects.filter(content = content).values("id")
                , user = owner_)


def create_answer(request, *args, **kwargs):
    if request.method == 'POST':
        content = request.POST.get("content")
        owner = request.POST.get("owner")
        owner_ = User.objects.get(username = owner)
        if (owner_ != None):
            if Content.object.filter(content = content).values("id") == None:
                Content.objects.create(mean = content)
                id_content = Content.object.filter(content = content).values("id")
                Answers.objects.create(content = id, is_contrib = True, owner = owner_)

def verified_answer(request, *args, **kwargs):
    if request.method == 'POST':
        content = request.POST.get("content")
        id_content = Content.objects.filter(mean = content).values("id")
        Answers.objects.filter(content = id).update(is_verified = True)


def set_many_answers_to_question(request, *args, **kwargs):
    if request.method == 'POST':
        list_ans = request.POST.get("list_ans")
        question = request.POST.get("question")
        ques = Questions.objects.get(content = Content.objects.get(mean = question).values("id"))
        for ans in list_ans:
            ques.list_answers.add(Answer.objects.get(content = Content.objects.get(mean = ans).values("id")))




        


        