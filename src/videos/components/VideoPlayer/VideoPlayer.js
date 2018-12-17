import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  videoPlayer: {
    width: '100%'
  }
})

const VideoPlayer = ({ classes, video, onLoadedMetadata }) => (
  <video
    className={classes.videoPlayer}
    controls
    name="media"
    preload="metadata"
    onLoadedMetadata={onLoadedMetadata}
  >
    <source src={video.videoUrl} />
  </video>
);

export default withStyles(styles)(VideoPlayer);
