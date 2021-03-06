import { combineReducers } from 'redux';

import groupTimetable from './groupTimetable';
import currentWeek from './currentWeek';
import isNotFound from './isNotFound';

export default combineReducers({
  groupTimetable,
  currentWeek,
  isNotFound,
});
