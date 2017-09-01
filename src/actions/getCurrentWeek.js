export const GET_CURRENT_WEEK = 'GET_CURRENT_WEEK';

function getWeekNumber(data) {
  return {
    type: GET_CURRENT_WEEK,
    data,
  };
}

export const getCurrentWeek = () => (dispatch) => {
  fetch('http://api.rozklad.org.ua/v2/weeks')
    .then((response) => response.json())
    .then((result) => {
      if (result.statusCode === 200) {
        dispatch(getWeekNumber(Number(result.data)));
      } else {
        throw new Error();
      }
    })
    .catch(() => {});
};
