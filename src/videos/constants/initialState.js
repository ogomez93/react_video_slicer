import { DEFAULT_VIDEO_URL } from './index';

import { getClipsFromLocalStorage } from 'videos/utils';

// videos state is an Array because the app was
// originally conceived to handle multiple videos
export default [
  {
    duration: 0,
    clips: getClipsFromLocalStorage() || [],
    loading: true,
    paused: true,
    videoUrl: DEFAULT_VIDEO_URL
  }
];
