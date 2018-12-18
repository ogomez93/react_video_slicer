import React from 'react';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';

import { switchAutoPlay } from 'autoPlay/actions';

const AutoPlaySwitch = ({ autoPlay, switchAutoPlay }) => (
  <Switch
    checked={autoPlay}
    color="primary"
    onChange={switchAutoPlay}
    value="autoPlay"
  />
);

const mapStateToProps = state => ({
  autoPlay: state.autoPlay
});

const mapDispatchToProps = dispatch => ({
  switchAutoPlay: () => dispatch(switchAutoPlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoPlaySwitch);
