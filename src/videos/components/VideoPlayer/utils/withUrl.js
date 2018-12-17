import { withProps } from 'recompose';

export default withProps(({
  video: { videoUrl },
  clip = {}
}) => ({
  url: Object.keys(clip).length === 0
    ? videoUrl
    : `${videoUrl}#t=${clip.start},${clip.end}`
}));
