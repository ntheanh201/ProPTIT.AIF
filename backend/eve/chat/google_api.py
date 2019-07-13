import os
import io
from google.cloud import speech
from google.cloud import texttospeech
# from django.conf import settings

class GoogleAPI(object):
    # PATH = settings.BASE_DIR
    content = ""
    pathMP3 = ""
    
    def __init__(self):
        self.content = ""
        self.pathMP3 = ""
    def setContent(self, content):
        self.content = content
    def getContent(self):
        return self.content
    def setPathMP3(self, pathMP3):
        self.pathMP3 = pathMP3
    def getPathMP3(self):
        return self.pathMP3
    def getPATH(self):
        return self.PATH

    def text2speech(self):
        client = texttospeech.TextToSpeechClient()
        synthesis_input = texttospeech.types.SynthesisInput(text= self.content)
        voice = texttospeech.types.VoiceSelectionParams(
            language_code='vi-VN',
            ssml_gender=texttospeech.enums.SsmlVoiceGender.FEMALE)
        audio_config = texttospeech.types.AudioConfig(
            audio_encoding=texttospeech.enums.AudioEncoding.MP3)
        response = client.synthesize_speech(synthesis_input, voice, audio_config)     
        rePATH = self.PATH + "/file/output.mp3"
        with open(rePATH, 'wb') as out:
            out.write(response.audio_content)
            print('Audio content written to file "output.mp3"')
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
    res = text.speech2text("/home/nghiatd/workspace/ai_ws/Hackathon/proptit-aif/TMP_STORAGE/e3ab38bc-d86e-4b57-ad81-6f5cb430e63b.wav")
    print(res)





