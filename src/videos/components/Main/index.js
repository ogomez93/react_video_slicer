import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import Main from './Main';

import { withSelectedClip, withSelectedVideo } from './utils/withMainState';
import { setClip, setFullVideo } from './utils/withMainHandlers';

import { getSelectedVideo } from 'videos/selectors/selectors';

const mapStateToProps = (state, props) => ({
  video: getSelectedVideo(state, props)
});

export default compose(
  withSelectedVideo,
  withSelectedClip,
  withHandlers({ setClip, setFullVideo }),
  connect(mapStateToProps)
)(Main);
