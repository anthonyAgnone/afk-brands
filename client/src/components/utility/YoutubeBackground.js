import React, { Component } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -99;
  &::after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(82, 36, 74, 0.9);
    @media (min-aspect-ratio: 16/9) {
      .video-foreground {
        height: 300%;
        top: -100%;
      }
    }
    @media (max-aspect-ratio: 16/9) {
      .video-foreground {
        width: 300%;
        left: -100%;
      }
    }
  }
`;

const Foreground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 67.6777vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  & span iframe {
    position: absolute;
    top: -50vh;
    left: 0;
    width: 97.6777vw;
    height: 200vh;
    pointer-events: none;
  }
`;

export default class YoutubeBackground extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }
  render() {
    const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        loop: 1
      }
    };
    return (
      <Wrapper className="video-background">
        <Foreground className="video-foreground">
          <YouTube
            videoId="719KI-i5dWQ"
            opts={videoOptions}
            className="video-iframe"
            onReady={this._onReady}
            onEnd={this._onEnd}
          />
        </Foreground>
      </Wrapper>
    );
  }
}
