import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  videoPlayer: {
    width: '100%'
  }
});

const VideoPlayer = ({ classes, url, onLoadedMetadata }) => (
  <video
    autoPlay
    className={classes.videoPlayer}
    controls
    name="media"
    onLoadedMetadata={onLoadedMetadata}
    preload="metadata"
    src={url}
  />
);

export default withStyles(styles)(VideoPlayer);
