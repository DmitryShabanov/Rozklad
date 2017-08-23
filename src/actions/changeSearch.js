export const CHANGE_SEARCH = 'CHANGE_SEARCH';

export function changeSearch(value) {
  return {
    type: CHANGE_SEARCH,
    payload: value,
  };
}
