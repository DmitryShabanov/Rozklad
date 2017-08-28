export const CHANGE_LOADED = 'CHANGE_LOADED';

export function changeLoaded(value) {
  return {
    type: CHANGE_LOADED,
    value,
  };
}
