import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import ClipItem from './ClipItem';

import { editClip, removeClip } from 'videos/actions';

import withMenuState from './utils/withMenuState';
import { closeMenu, openMenu } from './utils/menuHandler';

const mapDispatchToProps = (dispatch, props) => ({
  deleteItem: () => {
    const { closeMenu, clipIndex, videoIndex } = props;
    if (window.confirm('Are you sure?')) {
      dispatch(removeClip(clipIndex, videoIndex));
    }
    closeMenu();
  }
});

export default compose(
  withMenuState,
  withHandlers({ closeMenu, openMenu }),
  connect(null, mapDispatchToProps)
)(ClipItem);
