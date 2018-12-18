import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  loadingVideo: {
    margin: theme.spacing.unit * 4,
  }
});

const NoVisibleClips = ({ classes }) => (
  <Typography className={classes.loadingVideo} variant="subtitle2">
    No clips match those filters
  </Typography>
);

export default withStyles(styles)(NoVisibleClips);
