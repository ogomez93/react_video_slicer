export const getSelectedVideo = ( { videos = [{}] }, { videoIndex = 0 } ) =>
  videos[videoIndex];

export const getAllVideos = ({ videos = [{}] }) => videos;

export const getSelectedVideoIndex = ({ videos = [{}] }, { videoUrl }) =>
  videos.findIndex(currentVideo => currentVideo.videoUrl === videoUrl);

export const getSelectedVideoClips = ({ videos = [{}] }, { videoIndex = 0 }) =>
  videos[videoIndex].clips;

export const getVideoDuration = (
  { videos = [{}] },
  { videoIndex = 0 }
) => videos[videoIndex].duration;

export const getSelectedClip = (
  { videos = [{}] },
  { videoIndex = 0, clipIndex = -1 }
) => videos[videoIndex].clips[clipIndex];
