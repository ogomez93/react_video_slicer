import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import SearchBar from './SearchBar';

import { setNameFilter } from 'filters/actions';

import withName from './utils/withName';
import { onNameChange } from './utils/handlers';

const mapDispatchToProps = (dispatch, { name }) => ({
  onSubmit: event => {
    event.preventDefault();
    dispatch(setNameFilter(name));
  }
});

export default compose(
  withName,
  withHandlers({ onNameChange }),
  connect(null, mapDispatchToProps)
)(SearchBar)
