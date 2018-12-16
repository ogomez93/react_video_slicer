import { ADD_CLIP, REMOVE_CLIP } from './actionTypes';

export const addClip = (clip, videoIndex) => ({
  type: ADD_CLIP,
  payload: {
    videoIndex,
    clip
  }
});

export const removeClip = (clipIndex, videoIndex) => ({
  type: REMOVE_CLIP,
  payload: {
    videoIndex,
    clipIndex
  }
});
