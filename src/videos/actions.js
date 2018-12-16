import { ADD_CLIP, EDIT_CLIP, REMOVE_CLIP } from './actionTypes';

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
