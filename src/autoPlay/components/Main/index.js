import { connect } from 'react-redux';

import AutoPlaySwitch from './AutoPlaySwitch';

import { switchAutoPlay } from 'autoPlay/actions';

const mapStateToProps = state => ({
  autoPlay: state.autoPlay
});

const mapDispatchToProps = dispatch => ({
  switchAutoPlay: () => dispatch(switchAutoPlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoPlaySwitch);
