import { withProps } from 'recompose';

export default withProps(({
  clip
}) => ({
  mediaFragment: clip
    ? `#t=${clip.start},${clip.end}`
    : ''
}));
