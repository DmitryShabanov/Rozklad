import { combineReducers } from 'redux';

import groupTimetable from './groupTimetable';
import loaded from './loaded';

export default combineReducers({
  groupTimetable,
  loaded,
});
