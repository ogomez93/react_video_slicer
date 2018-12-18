import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

import AutoPlaySwitch from 'autoPlay/components/Main';

const VideoInfo = ({ video: { videoUrl = '' } }) => (
  <Fragment>
    <Typography variant="caption" gutterBottom noWrap>
      {videoUrl}
    </Typography>
    <Typography>
      Auto play
      <AutoPlaySwitch />
    </Typography>
  </Fragment>
);

export default VideoInfo;
