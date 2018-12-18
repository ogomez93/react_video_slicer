import { combineReducers } from 'redux';

import autoPlay from 'autoPlay/reducer';
import filters from 'filters/reducer';
import videos from 'videos/reducer';

const rootReducer = combineReducers({ autoPlay, filters, videos });

export default rootReducer;
