import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import PauseButton from 'videos/components/PauseButton';
import PlayButton from 'videos/components/PlayButton';

const RenderIcon = ({ video, selected, clipIndex, setClip, videoIndex }) => {
  if (selected && video.loading) {
    return <CircularProgress testid="RenderIcon.CircularProgress" />;
  }
  return selected && !video.paused
    ? <PauseButton
        clipIndex={clipIndex}
        selected={selected}
        setClip={setClip}
        testid="RenderIcon.PauseButton"
        videoIndex={videoIndex}
      />
    : <PlayButton
        clipIndex={clipIndex}
        selected={selected}
        setClip={setClip}
        testid="RenderIcon.PlayButton"
        videoIndex={videoIndex}
      />;
}

export default RenderIcon;
