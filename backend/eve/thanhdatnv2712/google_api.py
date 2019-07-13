import os
import io
from google.cloud import speech
from google.cloud.speech import enums
from google.cloud.speech import types
from google.cloud import texttospeech

class googleAPI(object):
    PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
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
        rePATH = self.PATH + "/output.mp3"
        with open(rePATH, 'wb') as out:
            out.write(response.audio_content)
            print('Audio content written to file "output.mp3"')
        return rePATH
    
    def speech2text(self):
        client = speech.SpeechClient()
        with io.open(self.pathMP3, 'rb') as audio_file:
            content = audio_file.read()
        audio = types.RecognitionAudio(content=content)
        config = types.RecognitionConfig(
            encoding=enums.RecognitionConfig.AudioEncoding.LINEAR16,
            sample_rate_hertz=24000,
            language_code='vi-VN')
        response = client.recognize(config, audio)
        ans = ""
        for result in response.results:
            ans += result.alternatives[0].transcript
            # print(u'Transcript: {}'.format(result.alternatives[0].transcript))
        return ans

    

if __name__ == "__main__":
    text = googleAPI()
    content = input()
    text.setContent(content)
    m = text.text2speech()
    print(m)
    repath = text.getPATH() + "/test.wav"
    print(repath)
    text.setPathMP3(repath)
    respon = text.speech2text()
    print(respon)






