const nameIsValid = name => name !== '';

const timeIsValid = (start, end) =>
  start < end &&
  start < 100 &&
  end <= 100;

export const clipErrors = ({ name, start, end }) => {
  const errors = [];
  if (!nameIsValid(name)) {
    errors.push('Name must not be empty.');
  }
  if (!timeIsValid(start, end)) {
    errors.push('Invalid time range.');
  }
  return errors;
}
