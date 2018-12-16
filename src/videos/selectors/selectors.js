export const getSelectedVideo = ({
  videos: {
    videos = [{}]
  } = {}
}, { videoIndex = 0 }) => videos[videoIndex];
