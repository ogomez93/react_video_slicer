import { withState } from 'recompose';

export const withSelectedClip = withState('clipIndex', 'setClipIndex', '');
export const withSelectedVideo = withState('videoIndex', 'setVideoIndex', 0);
