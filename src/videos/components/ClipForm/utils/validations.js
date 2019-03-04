const nameIsValid = name => name !== '';

const timeIsValid = (start, end) =>
  0 <= start &&
  start < end &&
  start < 100 &&
  end <= 100;

export const NAME_ERROR = 'The clip must have a name';
export const TIME_ERROR = 'Invalid time range';

export const getClipErrors = ({ name, start, end }) => {
  const errors = {};
  if (!nameIsValid(name)) errors.name = NAME_ERROR;
  if (!timeIsValid(start, end)) errors.time = TIME_ERROR;
  return errors;
}
