import { compose, withHandlers } from 'recompose';

import SearchBar from './SearchBar';

import withName from './utils/withName';
import nameHandler from './utils/nameHandler';

export default compose(
  withName,
  withHandlers({ onNameChange: nameHandler })
)(SearchBar)
