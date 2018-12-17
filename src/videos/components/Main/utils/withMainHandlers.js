export const setClip = ({ setClipIndex }) => event => {
  const clipIndex = parseInt(event.currentTarget.getAttribute('clipindex'));
  setClipIndex(isNaN(clipIndex) ? -1 : clipIndex);
};
