import { SET_VIDEO } from './actionTypes';

export const setVideo = (videoUrl = '') => ({
  type: SET_VIDEO,
  payload: {
    videoUrl
  }
});
