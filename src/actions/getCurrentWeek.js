export const GET_CURRENT_WEEK = 'GET_CURRENT_WEEK';

function getWeekNumber(data) {
  return {
    type: GET_CURRENT_WEEK,
    data,
  };
}

export const getCurrentWeek = () => (dispatch) => {
  fetch('https://api.rozklad.org.ua/v2/weeks')
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then((result) => dispatch(getWeekNumber(Number(result.data))))
    .catch(() => {});
};
