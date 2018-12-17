const nameIsValid = name => name !== '';

const timeIsValid = (start, end, duration) =>
  start < end &&
  start < duration &&
  end <= duration;

export const clipErrors = ({ name, start, end }, duration) => {
  const errors = [];
  if (!nameIsValid(name)) {
    errors.push('Name must not be empty.');
  }
  if (!timeIsValid(start, end, duration)) {
    errors.push('Invalid time range.');
  }
  return errors;
}
