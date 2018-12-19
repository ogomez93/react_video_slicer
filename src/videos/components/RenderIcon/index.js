import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import PauseButton from 'videos/components/PauseButton';
import PlayButton from 'videos/components/PlayButton';

const RenderIcon = ({ video, selected, clipIndex, setClip, videoIndex }) => {
  if (selected && video.loading) return <CircularProgress />;
  return selected && !video.paused
    ? <PauseButton
        clipIndex={clipIndex}
        selected={selected}
        setClip={setClip}
        videoIndex={videoIndex}
      />
    : <PlayButton
        clipIndex={clipIndex}
        selected={selected}
        setClip={setClip}
        videoIndex={videoIndex}
      />;
}

export default RenderIcon;
