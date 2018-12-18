export const valueMatchesFilter = (value = '', filter = '') =>
  value.toLowerCase().trim().includes(filter.toLowerCase().trim());

const filteredClips = (clips, nameFilter, tagFilter) =>
  clips.filter(
    ({ name, tag }) =>
      valueMatchesFilter(name, nameFilter) &&
      valueMatchesFilter(tag, tagFilter)
  );

export default filteredClips;