import React, { Component, createRef } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  videoPlayer: {
    width: '100%'
  }
});

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: props.video.paused
    }

    this.videoRef = createRef();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.video.paused !== prevState.paused) {
      return {
        paused: nextProps.video.paused
      };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    const videoPaused = this.videoPaused();
    const prevPaused = prevProps.video.paused;
    const thisPaused = this.props.video.paused;
    if (prevPaused !== thisPaused && thisPaused !== videoPaused) {
      videoPaused ? this.playVideo() : this.pauseVideo();
    }
  }

  playVideo = () => this.videoRef.current.play();
  pauseVideo = () => this.videoRef.current.pause();

  videoPaused = () => this.videoRef.current.paused;
  videoEnded = () => this.videoRef.current.ended;

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
        // autoPlay
        className={classes.videoPlayer}
        // controls
        name="media"
        onLoadedMetadata={onLoadedMetadata}
        onPause={onPause}
        onPlay={onPlay}
        preload="metadata"
        src={url}
      />
    );
  }
}

export default withStyles(styles)(VideoPlayer);
