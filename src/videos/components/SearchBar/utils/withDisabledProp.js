import { withProps } from 'recompose';

export default withProps(({ video: { clips, duration } }) => ({
  disabled: duration === 0 || clips.length === 0
}));

