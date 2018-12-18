import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import PauseButton from 'videos/components/PauseButton';
import PlayButton from 'videos/components/PlayButton';

import { formatDuration } from 'videos/utils';

const FullVideo = ({
  clipIndex,
  setClip,
  video: { duration, paused, videoUrl },
  videoIndex
}) => (
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
);

export default FullVideo;
