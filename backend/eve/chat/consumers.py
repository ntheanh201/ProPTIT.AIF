from channels.generic.websocket import AsyncJsonWebsocketConsumer
from google.cloud import translate
from django.conf import settings
import os
from uuid import uuid4
import base64
from .google_api import GoogleAPI
from io import BytesIO
from pydub import AudioSegment
from subprocess import Popen
import subprocess
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
        print("Text", text)
        # if request_type == "send_file":
        #     file_name = content['file_name']
            
        #     outpath = os.path.join(settings.BASE_DIR, "TMP_STORAGE")
        #     if os.path.isdir(outpath) == False:
        #         os.makedirs(outpath)
        #     outpath = os.path.join(outpath, file_name)
        #     fout = open(outpath, "wb")
        #     fout.write(data)
        #     fout.close()
        await self.send_json(content={"event": "translation_response", "text": text})