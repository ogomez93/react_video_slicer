import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import SearchBar from './SearchBar';

import { emptyFilters, setFilters } from 'filters/actions';

import { withName, withTag } from './utils/withFilters';
import { onNameChange, onTagChange } from './utils/handlers';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit: event => {
    event.preventDefault();
    dispatch(setFilters(props.name, props.tag));
  },
  onReset: event => {
    event.preventDefault();
    props.setName('');
    props.setTag('');
    dispatch(emptyFilters());
  }
});

export default compose(
  withName,
  withTag,
  withHandlers({ onNameChange, onTagChange }),
  connect(null, mapDispatchToProps)
)(SearchBar)
