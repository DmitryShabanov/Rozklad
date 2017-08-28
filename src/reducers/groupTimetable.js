import { GET_GROUP_TIMETABLE } from './../actions/getGroupTimetable';

export default function groupTimetable(state = { isLoaded: false }, action) {
  switch (action.type) {
    case GET_GROUP_TIMETABLE:
      return {
        isLoaded: true,
        data: action.data,
      };
    default:
      return state;
  }
}
