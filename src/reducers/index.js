import { combineReducers } from 'redux';

import groupTimetable from './groupTimetable';
import loaded from './loaded';
import currentWeek from './currentWeek';
import isNotFound from './isNotFound';

export default combineReducers({
  groupTimetable,
  loaded,
  currentWeek,
  isNotFound,
});
