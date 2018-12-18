import React, { Component, createRef } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { TIME_PRECISION } from 'videos/constants';

const styles = () => ({
  videoPlayer: {
    width: '100%'
  }
});

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { paused: props.video.paused };
    this.videoRef = createRef();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { paused } = nextProps.video;
    return paused !== prevState.paused
      ? { paused }
      : null;
  }

  componentDidUpdate(prevProps) {
    const videoPaused = this.videoPaused();
    const { paused: prevPaused } = prevProps.video;
    const { paused: thisPaused } = this.props.video;
    if (prevPaused !== thisPaused && thisPaused !== videoPaused) {
      videoPaused ? this.playVideo() : this.pauseVideo();
    }
  }

  formatTime = (number) => number.toFixed(TIME_PRECISION);
  getVideo = () => this.videoRef.current;
  getCurrentTime = () => this.formatTime(this.getVideo().currentTime);
  videoPaused = () => this.videoRef.current.paused;

  onTimeUpdate = () => {
    if (this.props.clip !== undefined) {
      let currentTime = this.getCurrentTime();
      const endTime = this.formatTime(this.props.clip.end);
      currentTime > endTime && this.getVideo().pause();
    }
  }

  pauseVideo = () => this.videoRef.current.pause();
  
  playVideo = () => {
    if (this.props.clip === undefined) return this.getVideo().play();

    const currentTime = this.getCurrentTime();
    const startTime = this.formatTime(this.props.clip.start);
    const endTime = this.formatTime(this.props.clip.end);
    if (currentTime < startTime || endTime <= currentTime) {
      this.videoRef.current.currentTime = startTime;
    }

    this.videoRef.current.play();
  };


  render() {
    const {
      classes,
      onLoadedMetadata,
      onPause,
      onPlay,
      url
    } = this.props;

    return (
      <video
        ref={this.videoRef}
        className={classes.videoPlayer}
        controls={!this.props.clip}
        name="media"
        onLoadedMetadata={onLoadedMetadata}
        onPause={onPause}
        onPlay={onPlay}
        onTimeUpdate={this.onTimeUpdate}
        preload="metadata"
        src={url}
      />
    );
  }
}

export default withStyles(styles)(VideoPlayer);
