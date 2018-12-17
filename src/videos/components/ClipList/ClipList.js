import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import ClipItem from 'videos/components/ClipItem';

const ClipList = ({ video: { clips = [], videoUrl, duration } }) => (
  <List>
    <ListItem>
      <ListItemText
        primary={`Full video (${duration} seconds)`}
        secondary={videoUrl}
        secondaryTypographyProps={{
          noWrap: true,
          title: videoUrl
        }}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <PlayArrowIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    {clips.map((clip, index) => <ClipItem {...clip} key={`clip-${index}`} />)}
  </List>
);

export default ClipList;
