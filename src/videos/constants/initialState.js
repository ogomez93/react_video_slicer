import { DEFAULT_VIDEO_URL } from './index';

import { getClipsFromLocalStorage } from 'videos/utils';

export default [
  {
    duration: 0,
    clips: getClipsFromLocalStorage() || [],
    loading: true,
    paused: true,
    videoUrl: DEFAULT_VIDEO_URL
  }
];
