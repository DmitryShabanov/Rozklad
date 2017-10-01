export const CHANGE_NOT_FOUND = 'CHANGE_NOT_FOUND';

export function changeNotFound(value) {
  return {
    type: CHANGE_NOT_FOUND,
    value,
  };
}
