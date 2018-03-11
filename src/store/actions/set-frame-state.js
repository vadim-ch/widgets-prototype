export const SET_FRAME_STATE = 'set-frame-state';

export const setFrameState = (payload) => {
  return {
    type: SET_FRAME_STATE,
    payload
  };
};