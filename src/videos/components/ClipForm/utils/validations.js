const nameIsValid = name => name !== '';

const timeIsValid = (start, end) =>
  start < end &&
  start < 100 &&
  end <= 100;

export const getClipErrors = ({ name, start, end }) => {
  const errors = {};
  if (!nameIsValid(name)) errors.name = 'The clip must have a name';
  if (!timeIsValid(start, end)) errors.time = 'Invalid time range';
  return errors;
}
