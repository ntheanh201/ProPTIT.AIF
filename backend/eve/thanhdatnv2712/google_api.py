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
    
    # def mp3towav(self):

    def speech2text(self, data):
        client = speech.SpeechClient()

        with io.open(data, 'rb') as audio_file:
            content = audio_file.read()
        stream = [content]
        requests = (types.StreamingRecognizeRequest(audio_content=chunk)
                    for chunk in stream)
        config = types.RecognitionConfig(
            encoding=enums.RecognitionConfig.AudioEncoding.LINEAR16,
            sample_rate_hertz=16000,
            language_code='en-US')
        streaming_config = types.StreamingRecognitionConfig(config=config)
        responses = client.streaming_recognize(streaming_config, requests)

        for response in responses:
            for result in response.results:
                print('Finished: {}'.format(result.is_final))
                print('Stability: {}'.format(result.stability))
                alternatives = result.alternatives
                for alternative in alternatives:
                    print('Confidence: {}'.format(alternative.confidence))
                    print(u'Transcript: {}'.format(alternative.transcript))

    

if __name__ == "__main__":
    text = googleAPI()
    content = input()
    text.setContent(content)
    # text.setContent(content)
    repath = text.text2speech()






