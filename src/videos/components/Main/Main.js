import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import ClipList from 'videos/components/ClipList';
import FullVideoButton from 'videos/components/FullVideoButton';
import NewClip from 'videos/components/NewClip';
import SearchBar from 'videos/components/SearchBar';
import VideoInfo from 'videos/components/VideoInfo';
import VideoPlayer from 'videos/components/VideoPlayer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    ...theme.mixins.gutters(),
    height: '100vh',
    padding: theme.spacing.unit * 2
  },
  container: {
    height: '100%'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary
  },
  listPaper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  clipsList: {
    flex: 1
  },
  sectionDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  columnContainer: {
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    }
  },
  newClipContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      marginTop: theme.spacing.unit * 2,
    }
  }
});

const Videos = ({ classes, video, videoIndex }) => (
  <div className={classes.root}>
    <Grid className={classes.container} container spacing={24}>
      <Grid item xs={12} md={6} className={classes.columnContainer}>
        <Grid container className={classes.columnContainer}>
          <Grid item>
            <Paper className={classes.paper}>
              <VideoPlayer video={video} videoIndex={videoIndex} />
              <VideoInfo video={video} />
            </Paper>
          </Grid>
          <Grid item xs className={classes.newClipContainer}>
            <NewClip video={video} videoIndex={videoIndex} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container className={classes.columnContainer}>
          <Paper className={classes.listPaper}>
            <Grid container spacing={24} alignItems="center">
              <Grid item xs={12} md={6}>
                <SearchBar />
              </Grid>
              <Grid item xs={12} md={6}>
                <FullVideoButton video={video} />
              </Grid>
            </Grid>
            <Divider className={classes.sectionDivider} />
            <Grid
              alignItems="stretch"
              className={classes.clipsList}
              container
              direction="column"
              justify="flex-start"
              spacing={24}
            >
              <ClipList video={video} videoIndex={videoIndex} />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Videos);
