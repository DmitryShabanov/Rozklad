import { GET_GROUP_TIMETABLE } from './../actions/getGroupTimetable';
import { RESETE_GROUP_TIMETABLE } from './../actions/resetGroupTimetable';

export default function groupTimetable(state = null, action) {
  switch (action.type) {
    case GET_GROUP_TIMETABLE:
      return action.data;
    case RESETE_GROUP_TIMETABLE:
      return null;
    default:
      return state;
  }
}
