import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import "./VideoPlayer.css";

export default class VideoPlayer extends Component {
  render() {
    let source = this.props.source;
    if (this.props.location) {
      source = this.props.location.state.source;
    }
    return (
      <div>
        <Player
          ref="player"
          autoPlay
        >
          <source src={source} />
          <ControlBar autoHide={false} />
        </Player>
      </div>
    );
  }
}
