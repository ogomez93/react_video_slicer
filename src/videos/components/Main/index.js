import { compose } from 'recompose';
import { connect } from 'react-redux';

import Main from './Main';

import withSelectedVideo from './utils/withSelectedVideo';

import { getSelectedVideo } from 'videos/selectors/selectors';

const mapStateToProps = (state, { videoIndex }) => ({
  video: getSelectedVideo(state, videoIndex)
});

export default compose(
  withSelectedVideo,
  connect(mapStateToProps)
)(Main);
