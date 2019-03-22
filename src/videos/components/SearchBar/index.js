import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import SearchBar from './SearchBar';

import { emptyFilters, setFilters } from 'filters/actions';
import { clipChange, removeAllClips } from 'videos/actions';

import withDisabledProp from './utils/withDisabledProp';
import { withName, withTag } from './utils/withFilters';
import { onNameChange, onTagChange } from './utils/handlers';
import withDialogState from './utils/withDialogState';
import { closeDialog, openDialog } from './utils/dialogHandlers';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit: event => {
    event.preventDefault();
    
    const { name, setClipIndex, tag, videoIndex } = props;
    setClipIndex(-1);
    dispatch(clipChange(videoIndex))
    dispatch(setFilters(name, tag));
  },
  onReset: event => {
    event.preventDefault();

    const { setClipIndex, setName, setTag } = props;
    setName('');
    setTag('');
    setClipIndex(-1);
    dispatch(emptyFilters());
  },
  removeAllClips: event => {
    event.preventDefault();

    const { setClipIndex, setDeleteDialog, videoIndex } = props;
    setDeleteDialog(false);
    setClipIndex(-1);
    dispatch(clipChange(videoIndex));
    dispatch(removeAllClips(videoIndex));
  }
});

export default compose(
  withDisabledProp,
  withDialogState,
  withName,
  withTag,
  withHandlers({
    onNameChange,
    onTagChange,
    closeDialog,
    openDialog
  }),
  connect(null, mapDispatchToProps)
)(SearchBar)
