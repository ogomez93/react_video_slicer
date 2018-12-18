import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import PauseIcon from '@material-ui/icons/Pause';

import PlayPauseButton from 'videos/components/PlayPauseButton';

import { pauseVideo } from 'videos/actions';

const onClick = (dispatch, { videoIndex }) => () =>
  dispatch(pauseVideo(videoIndex));

const mapDispatchToProps = (dispatch, props) => ({
  onClick: onClick(dispatch, props)
});

export default compose(
  withProps({ label: 'Pause', Icon: PauseIcon }),
  connect(null, mapDispatchToProps)
)(PlayPauseButton);
