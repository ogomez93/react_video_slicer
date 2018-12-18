import { withProps } from 'recompose';

export default withProps(({ video: { clips } }) => ({
  disabled: clips.length === 0
}));

