import { connect } from 'react-redux';

import VideoPlayer from './VideoPlayer';

import { setDuration } from 'videos/actions';

const mapDispatchToProps = (dispatch, { videoIndex }) => ({
  onLoadedMetadata: event =>
    dispatch(setDuration(event.target.duration, videoIndex))
});

export default connect(null, mapDispatchToProps)(VideoPlayer);
