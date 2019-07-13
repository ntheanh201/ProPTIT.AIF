from channels.generic.websocket import AsyncJsonWebsocketConsumer
from google.cloud import translate
from django.conf import settings
import os
from uuid import uuid4
import base64
from .google_api import GoogleAPI
from io import BytesIO
from subprocess import Popen
import subprocess
from shutil import move
api_caller = GoogleAPI()
# translate_client = translate.Client(target_language='vi')

class MessageConsumer(AsyncJsonWebsocketConsumer):
    @staticmethod
    def getData(uri):
        head, data = uri.split(',')
        data = data.encode("utf-8")
        decoded = base64.decodebytes(data)
        # decoded base64.b64decode(data)
        return decoded

    async def receive_json(self, content, **kwargs):
        # request_type = content['request_type']
        data = content['data']
        # print(data)
        data_decoded = MessageConsumer.getData(data)
        outpath = os.path.join(settings.BASE_DIR, "TMP_STORAGE")
        if os.path.isdir(outpath) == False:
            os.makedirs(outpath)
        file_name = os.path.join(outpath, "{}.webm".format(uuid4()))
        fout = open(file_name, "wb")
        fout.write(data_decoded)
        fout.close()

        outfile = os.path.join(outpath, "{}.wav".format(uuid4()))
        convert_cmd = 'ffmpeg -i "{}" "{}"'.format(file_name, outfile)
        process = Popen(convert_cmd, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        error, stdout = process.communicate()
        returncode = process.returncode
        text = ""
        text = api_caller.speech2text(outfile)
        
        try:
            os.remove(file_name)
            os.remove(outfile)
        except:
            pass
        
        re_path = api_caller.text2speech(input_text=text)
        des_dir = os.path.join(settings.BASE_DIR, "chat", "static", "outvoice")
        if not os.path.isdir(des_dir):
            os.makedirs(des_dir)
        des_path = os.path.join(des_dir, os.path.basename(re_path))
        move(re_path, des_path)
        resp_url = "http://127.0.0.1:8123/static/outvoice/{}".format(os.path.basename(des_path))
        await self.send_json(content={"status": "finish", "user": text, "bot": text, "audio_url": resp_url})