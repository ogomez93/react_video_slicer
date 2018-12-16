import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import FullVideoButton from 'videos/components/FullVideoButton';
import NewClip from 'videos/components/NewClip';
import SearchBar from 'videos/components/SearchBar';
import VideoInfo from 'videos/components/VideoInfo';
import VideoPlayer from 'videos/components/VideoPlayer';

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
    color: theme.palette.text.primary
  }
});

const Videos = ({ classes, video }) => (
  <div className={classes.root}>
    <Grid className={classes.container} container spacing={24}>
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <VideoPlayer videoUrl={video.videoUrl} />
              <VideoInfo video={video} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <NewClip />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Grid container spacing={24} alignItems="center">
            <Grid item xs={12} md={6}>
              <SearchBar />
            </Grid>
            <Grid item xs={12} md={6}>
              <FullVideoButton videoUrl={video.videoUrl} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Videos);
