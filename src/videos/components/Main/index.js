import { compose } from 'recompose';
import { connect } from 'react-redux';

import Main from './Main';

import { withSelectedClip, withSelectedVideo } from './utils/withMainState';

import { getSelectedVideo } from 'videos/selectors/selectors';

const mapStateToProps = (state, props) => ({
  video: getSelectedVideo(state, props)
});

export default compose(
  withSelectedVideo,
  withSelectedClip,
  connect(mapStateToProps)
)(Main);
