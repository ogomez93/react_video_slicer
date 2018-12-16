export const onValueChange = setValue => ({ target: { value = '' } = {} } = {}) => setValue(value);

export const onEndChange = ({ setEnd }) => onValueChange(setEnd);
export const onNameChange = ({ setName }) => onValueChange(setName);
export const onStartChange = ({ setStart }) => onValueChange(setStart);
