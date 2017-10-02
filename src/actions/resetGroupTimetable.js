export const RESETE_GROUP_TIMETABLE = 'RESETE_GROUP_TIMETABLE';

function resetData() {
  return {
    type: RESETE_GROUP_TIMETABLE,
  };
}

export const resetGroupTimetable = () => (dispatch) => {
  dispatch(resetData());
};
