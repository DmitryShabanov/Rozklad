import { combineReducers } from 'redux';

import search from './search';
import groupTimetable from './groupTimetable';

export default combineReducers({
  search,
  groupTimetable,
});
