import { withState } from 'recompose';

export const withSelectedClip = withState('clipIndex', 'setClipIndex', -1);
export const withSelectedVideo = withState('videoIndex', 'setVideoIndex', 0);
