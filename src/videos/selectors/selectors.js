export const getSelectedVideo = (
  { videos = [{}] },
  { videoIndex = 0 }
) => videos[videoIndex];

export const getAllVideos = ({ videos = [{}] }) => videos;
