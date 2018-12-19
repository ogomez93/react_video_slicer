export const getSelectedVideo = ({ videos = [{}] }, { videoIndex = 0 }) =>
  videos[videoIndex];

export const getAllVideos = ({ videos = [{}] }) => videos;

export const getSelectedVideoIndex = ({ videos = [{}] }, { videoUrl }) =>
  videos.findIndex(currentVideo => currentVideo.videoUrl === videoUrl);

export const getSelectedVideoClips = (state, props) =>
  getSelectedVideo(state, props).clips;

export const getVideoDuration = (state, props) =>
  getSelectedVideo(state, props).duration;

export const getSelectedClip = (state, props) =>
  getSelectedVideo(state, props).clips[props.clipIndex];
