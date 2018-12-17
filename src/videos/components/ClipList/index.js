import { branch, compose, renderComponent } from 'recompose';

import ClipList from './ClipList';
import LoadingVideo from './LoadingVideo';

export default compose(
  branch(
    ({ video: { loading } }) => loading,
    renderComponent(LoadingVideo)
  )
)(ClipList);
