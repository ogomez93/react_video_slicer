import { ADD_CLIP, EDIT_CLIP, REMOVE_CLIP } from './actionTypes';

import initialState from './constants/initialState';

let clips, video;

const videos = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_CLIP:
      video = state.videos[payload.videoIndex];
      ({ clips } = video);
      return {
        ...state,
        videos: Object.assign([], state.videos, {
          [payload.videoIndex]: {
            ...video,
            clips: [
              ...clips,
              payload.clip
            ]
          }
        })
      };

    case EDIT_CLIP:
      video = state.videos[payload.videoIndex];
      ({ clips } = video);
      return {
        ...state,
        videos: Object.assign([], state.videos, {
          [payload.videoIndex]: {
            ...video,
            clips: Object.assign([], clips, {
              [payload.clipIndex]: payload.clip
            })
          }
        })
      };

    case REMOVE_CLIP:
      video = state.videos[payload.videoIndex];
      ({ clips } = video);
      return {
        ...state,
        videos: Object.assign([], state.videos, {
          [payload.videoIndex]: {
            ...video,
            clips:
              clips
                .slice(0, payload.clipIndex)
                .concat(clips.slice(payload.clipIndex + 1))
          }
        })
      };

    default:
      return state;
  }
};

export default videos;
