import { CHANGE_NOT_FOUND } from './../actions/changeNotFound';

export default function isNotFound(state = false, action) {
  switch (action.type) {
    case CHANGE_NOT_FOUND:
      return action.value;
    default:
      return state;
  }
}
