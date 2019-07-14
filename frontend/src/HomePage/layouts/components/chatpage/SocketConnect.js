import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import Sound from 'react-sound';
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const client = new WebSocket("ws://127.0.0.1:8123/message/")

const styles = theme => ({
  fabButton: {
    // position: 'absolute',
    zIndex: 1,
    top: -45,
    bottom: 0,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  card: {
    minWidth: 275,
  },
})

class SocketConnect extends Component {
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
    setTimeout(this.stopRecording, 5000);
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
      const { createMessage } = this.props
      createMessage(responseData);
      console.log(responseData);
      console.log(responseData.user);
      let finish_status = false;
      if (responseData.status == "finish") {
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
    if (this.state.finish_conversation == false) {
      this.startRecording();
    }
  }

  render = () => {
    const { classes } = this.props;
    return (
      <Wrapper>
        <Card className={classes.card}>
          <ReactMic
            mimeType="audio/webm;codecs=opus"
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            onData={this.onData}
            strokeColor="#000000"
            backgroundColor="#FFFFFF" />
          {/* <button onClick={this.startRecording} type="button">Start</button> */}
          {/* <button onClick={this.stopRecording} type="button">Stop</button> */}

          <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
            <AddIcon onClick={this.startRecording} />
          </Fab>
          <Sound
            url={this.state.audio_url}
            playStatus={this.state.play_audio}
            onFinishedPlaying={this.handleFinishAudio}
          />
        </Card>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  bottom: -20px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;


SocketConnect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocketConnect);
