import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import ClipItem from 'videos/components/ClipItem';
import PauseButton from 'videos/components/PauseButton';
import PlayButton from 'videos/components/PlayButton';

import { formatDuration } from 'videos/utils';

const styles = () => ({
  list: {
    overflow: 'auto',
  }
});

const ClipList = ({
  classes,
  clipIndex,
  setClip,
  setFullVideo,
  video: { clips = [], videoUrl, duration, paused },
  videoIndex
}) => (
  <List className={classes.list}>
    <ListItem title="Play full video" selected={clipIndex === -1} button component="a">
      <ListItemText
        primary={`Full video (duration: ${formatDuration(duration)})`}
        secondary={videoUrl}
        secondaryTypographyProps={{
          noWrap: true,
          title: videoUrl
        }}
        clipindex={-1}
        onClick={setClip}
      />
      <ListItemSecondaryAction>
        {clipIndex === -1 && !paused
          ? <PauseButton
              clipIndex={-1}
              selected={clipIndex === -1}
              setClip={setClip}
              videoIndex={videoIndex}
            />
          : <PlayButton
              clipIndex={-1}
              selected={clipIndex === -1}
              setClip={setClip}
              videoIndex={videoIndex}
            />
        }
      </ListItemSecondaryAction>
    </ListItem>
    {clips.map((clip, index) =>
      <ClipItem
        {...clip}
        key={`clip-${index}`}
        clipIndex={index}
        selected={clipIndex === index}
        setClip={setClip}
        setFullVideo={setFullVideo}
        video={{ duration, paused, videoUrl }}
        videoIndex={videoIndex}
      />)}
  </List>
);

export default withStyles(styles)(ClipList);
