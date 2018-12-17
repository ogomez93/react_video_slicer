import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import ClipItem from 'videos/components/ClipItem';

const styles = () => ({
  list: {
    overflow: 'auto',
  }
});

const ClipList = ({
  classes,
  clipIndex,
  setClip,
  video: { clips = [], videoUrl, duration },
  videoIndex
}) => (
  <List className={classes.list}>
    <ListItem selected={clipIndex === -1} button component="a">
      <ListItemText
        primary={`Full video (${duration} seconds)`}
        secondary={videoUrl}
        secondaryTypographyProps={{
          noWrap: true,
          title: videoUrl
        }}
        clipindex={-1}
        onClick={setClip}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <PlayArrowIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    {clips.map((clip, index) =>
      <ClipItem
        {...clip}
        key={`clip-${index}`}
        clipIndex={index}
        selected={clipIndex === index}
        setClip={setClip}
        video={{ duration, videoUrl }}
        videoIndex={videoIndex}
      />)}
  </List>
);

export default withStyles(styles)(ClipList);
