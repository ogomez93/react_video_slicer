import {
  ADD_CLIP,
  EDIT_CLIP,
  REMOVE_CLIP,
  SET_DURATION
} from './actionTypes';

import initialState from './constants/initialState';

const setVideo = (videos, index) => videos[index];

let clips, video;

const videos = (videos = initialState, { payload, type }) => {
  switch (type) {
    case ADD_CLIP:
      video = setVideo(videos, payload.videoIndex);
      ({ clips } = video);
      return Object.assign([], videos, {
        [payload.videoIndex]: {
          ...video,
          clips: [
            ...clips,
            payload.clip
          ]
        }
      });

    case EDIT_CLIP:
      video = setVideo(videos, payload.videoIndex);
      ({ clips } = video);
      return Object.assign([], videos, {
        [payload.videoIndex]: {
          ...video,
          clips: Object.assign([], clips, {
            [payload.clipIndex]: payload.clip
          })
        }
      });

    case REMOVE_CLIP:
      video = setVideo(videos, payload.videoIndex);
      ({ clips } = video);
      return Object.assign([], videos, {
        [payload.videoIndex]: {
          ...video,
          clips:
            clips
              .slice(0, payload.clipIndex)
              .concat(clips.slice(payload.clipIndex + 1))
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

    default:
      return { ...videos };
  }
};

export default videos;
