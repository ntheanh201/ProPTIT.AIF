from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Content(models.Model):
    mean = models.TextField()

class Answers(models.Model):
    content = models.ForeignKey(Content, on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    is_contrib = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)

class Questions(models.Model):
    content = models.ForeignKey(Content, on_delete=models.CASCADE)
    list_answers = models.ManyToManyField(Answers)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
