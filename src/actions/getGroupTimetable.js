import { changeLoaded } from './changeLoaded';
import { getCurrentWeek } from './getCurrentWeek';

export const GET_GROUP_TIMETABLE = 'GET_GROUP_TIMETABLE';

function loadTimetable(data) {
  return {
    type: GET_GROUP_TIMETABLE,
    data,
  };
}

export const getGroupTimetable = (groupName) => (dispatch) => {
  fetch(`https://api.rozklad.org.ua/v2/groups/${groupName}/timetable`)
    .then((response) => response.json())
    .then((result) => {
      if (result.statusCode === 200) {
        dispatch(getCurrentWeek());
        dispatch(loadTimetable(result.data));
        dispatch(changeLoaded(true));
      } else {
        throw new Error();
      }
    })
    .catch(() => {});
};
