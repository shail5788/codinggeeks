import { SET_OVERLAY, REMOVE_OVERLAY } from "./type";

export const setOverlay = overlay => dispatch => {
  dispatch({
    type: SET_OVERLAY,
    payload: {
      overlay: overlay
    }
  });
};
