import { GET_GROUP_TIMETABLE } from './../actions/getGroupTimetable';

export default function groupTimetable(state = {}, action) {
  switch (action.type) {
    case GET_GROUP_TIMETABLE:
      return action.data;
    default:
      return state;
  }
}
