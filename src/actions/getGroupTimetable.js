export const GET_GROUP_TIMETABLE = 'GET_GROUP_TIMETABLE';

function loadTimetable(data) {
  return {
    type: GET_GROUP_TIMETABLE,
    data,
  };
}

export const getGroupTimetable = (groupName) => (dispatch) => {
  fetch(`http://api.rozklad.org.ua/v2/groups/${groupName}/timetable`)
    .then((response) => response.json())
    .then((result) => {
      if (result.statusCode === 200) {
        dispatch(loadTimetable(result.data));
      } else {
        throw new Error();
      }
    })
    .catch(() => dispatch(loadTimetable('ERROR')));
};
