import { connect } from 'react-redux';
import { branch, compose, renderComponent } from 'recompose';

import ClipList from './ClipList';
import LoadingVideo from './LoadingVideo';

import { getClips } from 'videos/selectors';

const mapStateToProps = (state, props) => ({
  visibleClips: getClips(state, props)
});

export default compose(
  branch(
    ({ video: { duration, loading } }) =>
      duration === 0 && loading,
    renderComponent(LoadingVideo)
  ),
  connect(mapStateToProps)
)(ClipList);
