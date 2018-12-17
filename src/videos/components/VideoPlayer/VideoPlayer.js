import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  videoPlayer: {
    width: '100%'
  }
});

const VideoPlayer = ({ classes, url, onLoadedMetadata }) => (
  <video
    className={classes.videoPlayer}
    controls
    name="media"
    onLoadedMetadata={onLoadedMetadata}
    preload="metadata"
  >
    <source src={url} />
  </video>
);

export default withStyles(styles)(VideoPlayer);
