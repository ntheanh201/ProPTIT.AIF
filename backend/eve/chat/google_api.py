import os
import io
from google.cloud import speech
from google.cloud import texttospeech
# from django.conf import settings
from uuid import uuid4
import base64

class GoogleAPI(object):
    # PATH = settings.BASE_DIR
    content = ""
    pathMP3 = ""
    
    def __init__(self):
        # self.PATH = settings.BASE_DIR
        self.PATH = os.path.dirname(__file__)
        # pass

    def text2speech(self, input_text):
        client = texttospeech.TextToSpeechClient()
        synthesis_input = texttospeech.types.SynthesisInput(text= input_text)
        voice = texttospeech.types.VoiceSelectionParams(
            language_code='vi-VN',
            ssml_gender=texttospeech.enums.SsmlVoiceGender.FEMALE)
        audio_config = texttospeech.types.AudioConfig(
            audio_encoding=texttospeech.enums.AudioEncoding.MP3)
        response = client.synthesize_speech(synthesis_input, voice, audio_config)
        out_dir = os.path.join(self.PATH, "TMP_STORAGE") 
        if not os.path.isdir(out_dir):
            os.makedirs(out_dir)
        rePATH = os.path.join(out_dir, "{}.mp3".format(uuid4()))
        with open(rePATH, 'wb') as out:
            out.write(response.audio_content)
        
        # encoded_data = base64.b64decode(response.audio_content)
        return rePATH
    
    def speech2text(self, wav_path):
        client = speech.SpeechClient()
        with io.open(wav_path, 'rb') as audio_file:
            content = audio_file.read()
        audio = speech.types.RecognitionAudio(content=content)
        config = speech.types.RecognitionConfig(
            encoding= speech.enums.RecognitionConfig.AudioEncoding.LINEAR16,
            sample_rate_hertz=48000,
            language_code='vi-VN')
        response = client.recognize(config, audio)
        ans = ""
        for result in response.results:
            ans += result.alternatives[0].transcript
            # print(u'Transcript: {}'.format(result.alternatives[0].transcript))
        return ans

    

if __name__ == "__main__":
    text = GoogleAPI()
    res = text.text2speech("Chào bạn, tôi có thể giúp gì cho bạn ?")
    print(res)





