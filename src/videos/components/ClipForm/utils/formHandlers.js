import { clipErrors } from './validations';

import { addClip, editClip } from 'videos/actions';

export const onValueChange = setValue =>
  ({ target: { value = '' } = {} } = {}) => setValue(value);

export const onNumberChange = setValue =>
  ({ target: { value = 0 } = {} } = {}) => setValue(value);

export const onEndChange = ({ setEnd }) => onNumberChange(setEnd);
export const onNameChange = ({ setName }) => onValueChange(setName);
export const onStartChange = ({ setStart }) => onNumberChange(setStart);

export const onSubmit = (dispatch, {
  end,
  name,
  start,
  video: { duration },
  videoIndex,
  clipIndex,
  onCancel
}) =>
  event => {
    event.preventDefault();
    const clip = {
      end: parseFloat(end),
      name,
      start: parseFloat(start)
    };
    const errors = clipErrors(clip, parseFloat(duration));
    if (errors.length === 0) {
      dispatch(
        clipIndex
          ? editClip(clip, clipIndex, videoIndex)
          : addClip(clip, videoIndex));
      onCancel();
    } else {
      console.log(errors);
    }
  };
