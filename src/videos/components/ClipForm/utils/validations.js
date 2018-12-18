const nameIsValid = name => name !== '';

const timeIsValid = (start, end) =>
  start < end &&
  start < 100 &&
  end <= 100;

export const clipErrors = ({ name, start, end }) => {
  const errors = {};
  if (!nameIsValid(name)) errors.name = 'Name must not be empty';
  if (!timeIsValid(start, end)) errors.time = 'Invalid time range.';
  return errors;
}
