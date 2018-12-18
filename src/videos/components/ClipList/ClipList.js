import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import ClipItem from 'videos/components/ClipItem';
import FullVideo from './FullVideo';
import NoVisibleClips from './NoVisibleClips';

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
  video,
  video: { clips = [], videoUrl, duration, paused },
  videoIndex,
  visibleClips
}) => (
  <List className={classes.list}>
    <FullVideo
      clipIndex={clipIndex}
      setClip={setClip}
      video={video}
      videoIndex={videoIndex}
    />
    {
      clips.length > 0 && visibleClips.length === 0
        ? <NoVisibleClips />
        : visibleClips.map((clip, index) =>
            <ClipItem
              {...clip}
              key={`clip-${index}`}
              clipIndex={index}
              selected={clipIndex === index}
              setClip={setClip}
              setFullVideo={setFullVideo}
              video={{ duration, paused, videoUrl }}
              videoIndex={videoIndex}
            />)
    }
  </List>
);

export default withStyles(styles)(ClipList);
