import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

const FullVideoButton = ({ classes, playing = false, videoUrl }) => (
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
  >
    {playing ? 'Pause' : 'Play full video'}
  </Button>
);

export default withStyles(styles)(FullVideoButton)
