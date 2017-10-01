import { changeLoaded } from './changeLoaded';
import { getCurrentWeek } from './getCurrentWeek';
import { changeNotFound } from './changeNotFound';

export const GET_GROUP_TIMETABLE = 'GET_GROUP_TIMETABLE';

function loadTimetable(data) {
  return {
    type: GET_GROUP_TIMETABLE,
    data,
  };
}

export const getGroupTimetable = (groupName) => (dispatch) => {
  fetch(`https://api.rozklad.org.ua/v2/groups/${groupName}/timetable`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then((result) => {
      dispatch(getCurrentWeek());
      dispatch(loadTimetable(result.data));
      dispatch(changeLoaded(true));
    })
    .catch(() => dispatch(changeNotFound(true)));
};
