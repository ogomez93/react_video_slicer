import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import SearchBar from './SearchBar';

import { emptyFilters, setFilters } from 'filters/actions';
import { clipChange } from 'videos/actions';

import withDisabledProp from './utils/withDisabledProp';
import { withName, withTag } from './utils/withFilters';
import { onNameChange, onTagChange } from './utils/handlers';

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

    const { setClipIndex, setName, setTag, videoIndex } = props;
    setName('');
    setTag('');
    setClipIndex(-1);
    dispatch(clipChange(videoIndex))
    dispatch(emptyFilters());
  }
});

export default compose(
  withDisabledProp,
  withName,
  withTag,
  withHandlers({ onNameChange, onTagChange }),
  connect(null, mapDispatchToProps)
)(SearchBar)
