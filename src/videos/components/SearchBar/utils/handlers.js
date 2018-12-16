export const onNameChange = ({ setName }) => ({
  target: { value = '' } = {}
}) => setName(value);
