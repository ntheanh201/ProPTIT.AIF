from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.conf.urls import url
from chat.consumers import MessageConsumer
import json
import django
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hackathon.settings')
django.setup()
websocket_urlpatterns = [
    url('message/', MessageConsumer),
]

application = ProtocolTypeRouter({
    'websocket': AuthMiddlewareStack(
    	URLRouter(
            websocket_urlpatterns
    	)
    )
})