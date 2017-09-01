import { GET_CURRENT_WEEK } from './../actions/getCurrentWeek';

export default function currentWeek(state = null, action) {
  switch (action.type) {
    case GET_CURRENT_WEEK:
      return action.data;
    default:
      return state;
  }
}
