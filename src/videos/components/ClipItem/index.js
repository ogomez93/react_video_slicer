import { compose, withHandlers } from 'recompose';

import ClipItem from './ClipItem';

import withMenuState from './utils/withMenuState';
import { closeMenu, openMenu } from './utils/menuHandler';

export default compose(
  withMenuState,
  withHandlers({ closeMenu, openMenu })
)(ClipItem);
