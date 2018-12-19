import { createSelector } from 'reselect';

import { getSelectedVideoClips } from './selectors';
import { getNameFilter, getTagFilter } from 'filters/selectors';

import filteredClips from './utils/filteredClips';

export const getVisibleClips = createSelector(
  [getSelectedVideoClips, getNameFilter, getTagFilter],
  (clips, nameFilter, tagFilter) =>
    filteredClips(clips, nameFilter, tagFilter)
);