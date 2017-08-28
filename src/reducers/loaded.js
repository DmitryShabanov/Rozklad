import { CHANGE_LOADED } from './../actions/changeLoaded';

export default function loaded(state = false, action) {
  switch (action.type) {
    case CHANGE_LOADED:
      return action.value;
    default:
      return state;
  }
}
