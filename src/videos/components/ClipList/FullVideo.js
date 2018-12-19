import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import RenderIcon from 'videos/components/RenderIcon';

import { formatDuration } from 'videos/utils';

const FullVideo = ({
  clipIndex,
  setClip,
  video,
  videoIndex
}) => (
  <ListItem title="Play full video" selected={clipIndex === -1} button component="a">
    <ListItemText
      primary={`Full video (duration: ${formatDuration(video.duration)})`}
      secondary={video.videoUrl}
      secondaryTypographyProps={{
        noWrap: true,
        title: video.videoUrl
      }}
      clipindex={-1}
      onClick={setClip}
    />
    <ListItemSecondaryAction>
      <RenderIcon
        clipIndex={-1}
        selected={clipIndex === -1}
        setClip={setClip}
        video={video}
        videoIndex={videoIndex}
      />
    </ListItemSecondaryAction>
  </ListItem>
);

export default FullVideo;
