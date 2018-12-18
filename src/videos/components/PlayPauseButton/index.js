import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const PlayPauseButton = ({ clipIndex, Icon, label, onClick }) => (
  <IconButton aria-label={label} clipindex={clipIndex} onClick={onClick}>
    <Icon />
  </IconButton>
);

export default PlayPauseButton;
