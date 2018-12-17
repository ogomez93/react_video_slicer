import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import ClipItem from './ClipItem';

import { removeClip } from 'videos/actions';

import withMenuState from './utils/withMenuState';
import { closeMenu, openMenu } from './utils/menuHandler';
import {
  withDeleteDialogState,
  withEditDialogState
} from './utils/withDialogsState';
import {
  openEditing,
  closeEditing,
  openDeleting,
  closeDeleting
} from './utils/dialogsHandlers';

const mapDispatchToProps = (dispatch, props) => ({
  deleteItem: () => {
    const {
      closeMenu,
      closeDeleting,
      clipIndex,
      setFullVideo,
      videoIndex
    } = props;
    dispatch(removeClip(clipIndex, videoIndex));
    closeDeleting && closeDeleting();
    closeMenu && closeMenu();
    setFullVideo && setFullVideo();
  }
});

export default compose(
  withMenuState,
  withDeleteDialogState,
  withEditDialogState,
  withHandlers({
    closeMenu,
    openMenu,
    openEditing,
    closeEditing,
    openDeleting,
    closeDeleting
  }),
  connect(null, mapDispatchToProps)
)(ClipItem);
