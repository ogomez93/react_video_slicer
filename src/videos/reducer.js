import {
  ADD_CLIP,
  EDIT_CLIP,
  REMOVE_CLIP,
  SET_DURATION,
  CLIP_CHANGE,
  PAUSE_VIDEO,
  PLAY_VIDEO
} from './actionTypes';

import { saveClipsToLocalStorage } from 'videos/utils';

import initialState from './constants/initialState';

const setVideo = (videos, index) => videos[index];

let clips, newClips, video;

const videos = (videos = initialState, { payload, type }) => {
  switch (type) {
    case ADD_CLIP:
      video = setVideo(videos, payload.videoIndex);
      ({ clips } = video);
      newClips = [...video.clips, payload.clip];
      saveClipsToLocalStorage(newClips);
      return Object.assign([], videos, {
        [payload.videoIndex]: {
          ...video,
          clips: newClips
        }
      });

    case EDIT_CLIP:
      video = setVideo(videos, payload.videoIndex);
      ({ clips } = video);
      newClips = Object.assign([], clips, {
        [payload.clipIndex]: payload.clip
      });
      saveClipsToLocalStorage(newClips);
      return Object.assign([], videos, {
        [payload.videoIndex]: {
          ...video,
          clips: newClips
        }
      });

    case REMOVE_CLIP:
      video = setVideo(videos, payload.videoIndex);
      ({ clips } = video);
      newClips = clips
        .slice(0, payload.clipIndex)
        .concat(clips.slice(payload.clipIndex + 1));
      saveClipsToLocalStorage(newClips);
      return Object.assign([], videos, {
        [payload.videoIndex]: {
          ...video,
          clips: newClips
        }
      });

    case SET_DURATION:
      video = setVideo(videos, payload.videoIndex);
      return Object.assign([], videos, {
        [payload.videoIndex]: {
          ...video,
          duration: payload.duration,
          loading: false
        }
      });

    case CLIP_CHANGE:
      video = setVideo(videos, payload.videoIndex);
      return Object.assign([], videos, {
        [payload.videoIndex]: {
          ...video,
          loading: true,
          paused: true
        }
      });

    case PAUSE_VIDEO:
      video = setVideo(videos, payload.videoIndex);
      return Object.assign([], videos, {
        [payload.videoIndex]: {
          ...video,
          paused: true
        }
      });

    case PLAY_VIDEO:
      video = setVideo(videos, payload.videoIndex);
      return Object.assign([], videos, {
        [payload.videoIndex]: {
          ...video,
          paused: false
        }
      });

    default:
      return { ...videos };
  }
};

export default videos;
