import {
  ADD_CLIP,
  EDIT_CLIP,
  REMOVE_CLIP,
  SET_DURATION,
  REMOVE_ALL_CLIPS,
  CLIP_CHANGE,
  PAUSE_VIDEO,
  PLAY_VIDEO
} from './actionTypes';

export const addClip = (clip, videoIndex) => ({
  type: ADD_CLIP,
  payload: {
    clip,
    videoIndex
  }
});

export const editClip = (clip, clipIndex, videoIndex) => ({
  type: EDIT_CLIP,
  payload: {
    clip,
    clipIndex,
    videoIndex
  }
});

export const removeClip = (clipIndex, videoIndex) => ({
  type: REMOVE_CLIP,
  payload: {
    clipIndex,
    videoIndex
  }
});

export const setDuration = (duration, videoIndex) => ({
  type: SET_DURATION,
  payload: {
    duration,
    videoIndex
  }
});

export const removeAllClips = videoIndex => ({
  type: REMOVE_ALL_CLIPS,
  payload: {
    videoIndex
  }
});

export const clipChange = videoIndex => ({
  type: CLIP_CHANGE,
  payload: {
    videoIndex
  }
});

export const pauseVideo = videoIndex => ({
  type: PAUSE_VIDEO,
  payload: {
    videoIndex
  }
});

export const playVideo = videoIndex => ({
  type: PLAY_VIDEO,
  payload: {
    videoIndex
  }
});
