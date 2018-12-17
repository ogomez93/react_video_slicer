import React from 'react';
import Button from '@material-ui/core/Button';

const FullVideoButton = ({
  video: { playing = false, loading },
  setFullVideo
}) => (
  <Button
    color="primary"
    disabled={loading}
    onClick={setFullVideo}
    variant="contained"
  >
    {playing ? 'Pause' : 'Play full video'}
  </Button>
);

export default FullVideoButton;
