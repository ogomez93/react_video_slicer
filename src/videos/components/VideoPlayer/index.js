import { connect } from 'react-redux';
import { compose } from 'recompose';

import VideoPlayer from './VideoPlayer';

import { setDuration } from 'videos/actions';
import { getSelectedClip } from 'videos/selectors/selectors';

import withUrl from './utils/withUrl';

const mapStateToProps = (state, props) => ({
  clip: getSelectedClip(state, props)
});

const mapDispatchToProps = (dispatch, { videoIndex }) => ({
  onLoadedMetadata: event =>
    dispatch(setDuration(event.target.duration, videoIndex))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withUrl
)(VideoPlayer);
