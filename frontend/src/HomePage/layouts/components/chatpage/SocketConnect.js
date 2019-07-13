import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import Sound from 'react-sound';

const client = new WebSocket("ws://127.0.0.1:8123/message/")

export default class SocketConnect extends Component {
  constructor(props) {

    super(props);
    this.state = {
      file: null,
      record: false,
      computer_turn: true,
      play_audio: Sound.status.PLAYING,
      audio_url: "http://127.0.0.1:8123/static/outvoice/hello.mp3",
      finish_conversation: false
    }
  }

  startRecording = () => {
    this.setState({
      record: true,
      computer_turn: false
    });
    setTimeout(this.stopRecording, 3000);
  }

  stopRecording = () => {
    this.setState({
      record: false,
      computer_turn: true
    });
  }

  onStop = (recordedBlob) => {
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      let req_data = {
        "request_type": "send_file",
        "data": fileReader.result,
      }
      client.send(JSON.stringify(req_data));
    }
    fileReader.readAsDataURL(recordedBlob.blob);
  }

  componentWillMount = () => {
    client.onopen = () => {
      console.log("Connected to server");

    }
    client.onmessage = (e) => {
      let responseData = JSON.parse(e.data);
      console.log(responseData);
      let finish_status = false;
      if(responseData.status == "finish"){
        finish_status = true;
      }
      this.setState({
        audio_url: responseData.audio_url,
        play_audio: Sound.status.PLAYING,
        finish_conversation: finish_status
      })
    }
  }

  handleFinishAudio = () => {
    this.setState({
      play_audio: Sound.status.STOPPED
    })
    if(this.state.finish_conversation == false){
      this.startRecording();
    }
  }

  render = () => {
    return (
      <div>
        <ReactMic
          mimeType="audio/webm;codecs=opus"
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
        <Sound
          url={this.state.audio_url}
          playStatus={this.state.play_audio}
          onFinishedPlaying={this.handleFinishAudio}
        />
      </div>
    );
  }
}
