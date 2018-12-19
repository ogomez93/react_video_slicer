import React from 'react';
import Switch from '@material-ui/core/Switch';

const AutoPlaySwitch = ({ autoPlay, switchAutoPlay }) => (
  <Switch
    checked={autoPlay}
    color="primary"
    onChange={switchAutoPlay}
    value="autoPlay"
  />
);

export default AutoPlaySwitch;
