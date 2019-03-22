export const onFilterChange = setFilter =>
  ({ target: { value = '' } }) => setFilter(value);

export const onNameChange = ({ setName }) => onFilterChange(setName);
export const onTagChange = ({ setTag }) => onFilterChange(setTag);
