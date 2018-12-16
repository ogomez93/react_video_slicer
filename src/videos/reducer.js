import { ADD_CLIP, REMOVE_CLIP } from './actionTypes';

import initialState from './constants/initialState';

let video;

const videos = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_CLIP:
      video = state.videos[payload.videoIndex];
      return {
        ...state,
        videos: Object.assign([], state.videos, {
          [payload.videoIndex]: {
            ...video,
            clips: [
              ...video.clips,
              payload.clip
            ]
          }
        })
      };

    case REMOVE_CLIP:
      video = state.videos[payload.videoIndex];
      return {
        ...state,
        videos: Object.assign([], state.videos, {
          [payload.videoIndex]: {
            ...video,
            clips:
              video
                .slice(0, payload.clipIndex)
                .concat(video.slice(payload.clipIndex + 1))
          }
        })
      };

    default:
      return state;
  }
};

export default videos;
