def create_question(request, *args, **kwargs):
    if request.method == 'POST':
        content = request.POST.get("content")
        owner = request.POST.get("owner")
        owner_ = User.objects.get(username = owner)
        if owner != None:
            try:
                Content.objects.get(mean = content)
            except:
                Content.objects.create(mean = content)
            try:
                Questions.objects.get(content = Content.objects.get(mean = content))
            except:
                Questions.objects.create(content = Content.objects.get(mean = content)
                , owner = owner_)


def create_answer(request, *args, **kwargs):
    if request.method == 'POST':
        content = request.POST.get("content")
        owner = request.POST.get("owner")
        owner_ = User.objects.get(username = owner)
        if owner != None:
            try:
                Content.objects.get(mean = content)
            except:
                Content.objects.create(mean = content)

            try:
                Answers.objects.get(content = Content.objects.get(mean = content))
            except:
                Answers.objects.create(content = Content.objects.get(mean = content)
                , owner = owner_)

def verified_answer(request, *args, **kwargs):
    if request.method == 'POST':
        content = request.POST.get("content")
        Answers.objects.filter(content = Content.objects.get(mean = content)).update(is_verified = True)

def submit_answer(request, *args, **kwargs):
    if request.method == 'POST':
        question = request.POST.get("question")
        answer = request.POST.get("answer")
        ques = Questions.objects.get(content = Content.objects.get(mean = question))
        ques.list_answers.add(Answers.objects.get(content = Content.objects.get(mean = answer)))


def create_user(request, *args, **kwargs):
    if request.method == 'POST':
        username, email, password = request.POST.get("username", "email", "password")
        User.objects.create_user(username = username, email = email, password = password)