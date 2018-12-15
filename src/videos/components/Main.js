import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import SearchBar from 'videos/components/SearchBar';
import FullVideoButton from 'videos/components/FullVideoButton';

import { DEFAULT_VIDEO_URL } from 'videos/constants';

const styles = theme => ({
  root: {
    flexGrow: 1,
    ...theme.mixins.gutters(),
    minHeight: '100vh',
    height: '100%',
    padding: theme.spacing.unit * 2
  },
  container: {
    height: '100%'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    height: '100%'
  },
});

const Videos = ({ classes }) => (
  <div className={classes.root}>
    <Grid className={classes.container} container spacing={24}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          Video container
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Grid container spacing={24} alignItems="center">
            <Grid item xs={12} md={6}>
              <SearchBar />
            </Grid>
            <Grid item xs={12} md={6}>
              <FullVideoButton videoUrl={DEFAULT_VIDEO_URL} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Videos);
