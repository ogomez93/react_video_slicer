import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  videoPlayer: {
    height: '100%',
    width: '100%'
  }
})

const VideoPlayer = ({ classes, videoUrl }) => (
  <video
    className={classes.videoPlayer}
    controls
    name="media"
    preload="metadata"
  >
    <source src={videoUrl} />
  </video>
);

export default withStyles(styles)(VideoPlayer);
