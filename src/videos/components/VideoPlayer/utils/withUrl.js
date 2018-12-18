import { withProps } from 'recompose';

export default withProps(({
  video: { videoUrl },
  clip
}) => ({
  url: clip
    ? `${videoUrl}#t=${clip.start},${clip.end}`
    : videoUrl
}));
