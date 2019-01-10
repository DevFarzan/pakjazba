import React, { Component } from 'react';
import './audioplayer.css';



class AudioPlayer extends Component{

  render(){
    return(
      <audio id="myAudio" controls style={{width:"100%"}}>
  <source src="horse.ogg" type="audio/ogg"/>
  <source src="horse.mp3" type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio>

    )
  }
}

export default AudioPlayer;
