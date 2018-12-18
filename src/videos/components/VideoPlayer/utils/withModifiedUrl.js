import { withProps } from 'recompose';

export default withProps(({
  mediaFragment,
  video: { videoUrl }
}) => ({
  url: `${videoUrl}${mediaFragment}`
}));
