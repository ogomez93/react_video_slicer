import { clipChange } from 'videos/actions';

export const setClip = (dispatch, { clipIndex, setClipIndex, videoIndex }) => event => {
  const currentClipIndex = parseInt(event.currentTarget.getAttribute('clipindex'));
  setClipIndex(isNaN(currentClipIndex) ? -1 : currentClipIndex);
  clipIndex !== currentClipIndex && dispatch(clipChange(videoIndex));
};

export const setFullVideo = ({ setClipIndex }) =>
  () => setClipIndex && setClipIndex(-1);
