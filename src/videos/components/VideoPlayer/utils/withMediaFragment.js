import { withProps } from 'recompose';
import { percentageToSeconds } from 'videos/utils';

export default withProps(({
  clip,
  video: { duration }
}) => {
  if (!clip) return { mediaFragment: '' };
  
  const mediaFragmentStart = percentageToSeconds(clip.start, duration);
  const mediaFragmentEnd = percentageToSeconds(clip.end, duration);

  return { mediaFragment: `#t=${mediaFragmentStart},${mediaFragmentEnd}` };
});
