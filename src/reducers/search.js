import { CHANGE_SEARCH } from './../actions/changeSearch';

export default function search(state = '', action) {
  switch (action.type) {
    case CHANGE_SEARCH:
      return action.payload;
    default:
      return state;
  }
}
