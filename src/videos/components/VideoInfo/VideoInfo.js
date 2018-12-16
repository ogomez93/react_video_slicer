import React from 'react';
import Typography from '@material-ui/core/Typography';

const VideoInfo = ({ video: { videoUrl = '' } }) => (
  <Typography variant="caption" gutterBottom>
    {videoUrl}
  </Typography>
);

export default VideoInfo;
