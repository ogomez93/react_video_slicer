import { branch, compose, renderComponent } from 'recompose';

import ClipList from './ClipList';
import LoadingVideo from './LoadingVideo';

export default compose(
  branch(
    ({ video: { duration, loading } }) =>
      duration === 0 && loading,
    renderComponent(LoadingVideo)
  )
)(ClipList);
