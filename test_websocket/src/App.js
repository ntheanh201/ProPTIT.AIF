import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import './App.css';
// import Websocket from 'react-websocket';

const client = new WebSocket("ws://127.0.0.1:8123/message/")

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
      record: false
    }
  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onStop = (recordedBlob) => {
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      let req_data = {
        "request_type": "send_file",
        "data": fileReader.result,
      }
      // console.log(fileReader.result);
      client.send(JSON.stringify(req_data));
    }
    fileReader.readAsDataURL(recordedBlob.blob);
  }

  // createFileReader = () => {
  //   let fileReader = new FileReader();
  //   fileReader.onloadend = this.sendMessage;
  //   return fileReader;
  // }

  // sendMessage = (e) => {
  //   let req_data = {
  //     "request_type": "send_file",
  //     "content": this.state.fileReader.result,
  //   }
  //   client.send(JSON.stringify({"content": "Hello server"}));
  // }

  componentWillMount = () => {
    client.onopen = () => {
      console.log("Connected to server")
    }
    client.onmessage = (e) => {
      let responseData = JSON.parse(e.data);
      console.log(responseData);
    }
  }

  render=() => {
    return (
      <div>
        <ReactMic
          mimeType= "audio/webm;codecs=opus"
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
      </div>
    );
  }
}


export default App;
