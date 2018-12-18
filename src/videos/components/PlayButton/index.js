import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import PlayPauseButton from 'videos/components/PlayPauseButton';

import { playVideo } from 'videos/actions';

const onClick = (dispatch, { videoIndex }) => () =>
  dispatch(playVideo(videoIndex));

const mapDispatchToProps = (dispatch, props) => ({
  onClick: props.selected
    ? onClick(dispatch, props)
    : props.setClip
});

export default compose(
  withProps({ label: 'Play', Icon: PlayArrowIcon }),
  connect(null, mapDispatchToProps)
)(PlayPauseButton);
