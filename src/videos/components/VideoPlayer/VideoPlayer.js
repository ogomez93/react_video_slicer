import React, { Component, createRef } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { TIME_PRECISION } from 'videos/constants';
import { percentageToSeconds } from 'videos/utils';
import VideoControls from 'videos/components/VideoControls';

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
    const videoIsPaused = this.videoIsPaused();
    const { paused: prevPaused } = prevProps.video;
    const { paused: thisPaused } = this.props.video;
    if (prevPaused !== thisPaused && thisPaused !== videoIsPaused) {
      videoIsPaused ? this.playVideo() : this.pauseVideo();
    }
  }

  formatToFixed = number => parseFloat(number.toFixed(TIME_PRECISION));

  fromPercentageToSeconds = percentage =>
    percentageToSeconds(percentage, this.props.video.duration);

  getVideo = () => this.videoRef.current;

  getCurrentTime = () => this.getVideo().currentTime;

  setCurrentTime = value => this.getVideo().currentTime = value;

  videoIsPaused = () => this.getVideo().paused;

  videoIsFullScreen = () => this.getVideo().fullscreenElement;

  onTimeUpdate = () => {
    if (this.props.clip !== undefined) {
      let currentTime = this.getCurrentTime();
      const endTime = this.fromPercentageToSeconds(this.props.clip.end);
      currentTime > endTime && this.pauseVideo();
    }
  }

  pauseVideo = () => this.getVideo().pause();

  playVideo = () => {
    if (this.props.clip === undefined) return this.getVideo().play();

    const currentTime = this.getCurrentTime();
    const startTime = this.fromPercentageToSeconds(this.props.clip.start);
    const endTime = this.fromPercentageToSeconds(this.props.clip.end);
    if (currentTime < startTime || endTime <= currentTime) {
      this.setCurrentTime(startTime);
    }

    this.getVideo().play();
  };

  onClick = () => {
    if (this.videoIsPaused()) {
      this.props.onPlay();
      this.playVideo();
    } else {
      this.props.onPause();
      this.pauseVideo();
    }
  }

  render() {
    const {
      classes,
      clip,
      onLoadedMetadata,
      onPause,
      onPlay,
      video,
      url
    } = this.props;

    return (
      <div style={{ position: 'relative' }}>
        {
          clip &&
          <VideoControls
            onClick={this.onClick}
            video={video}
          />
        }
        <video
          ref={this.videoRef}
          className={classes.videoPlayer}
          controls={!clip}
          name="media"
          onDoubleClick={clip && this.onDoubleClick}
          onLoadedMetadata={onLoadedMetadata}
          onPause={onPause}
          onPlay={onPlay}
          onTimeUpdate={this.onTimeUpdate}
          preload="metadata"
          src={url}
        />
      </div>
    );
  }
}

export default withStyles(styles)(VideoPlayer);
