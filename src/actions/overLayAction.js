import { SET_OVERLAY, REMOVE_OVERLAY } from "./type";

export const setOverLay = overlay => dispatch => {
  dispatch({
    type: SET_OVERLAY,
    payload: {
      overlay: overlay
    }
  });
};
export const removeOverlay = () => dispatch => {
  dispatch({
    type: REMOVE_OVERLAY,
    payload: {
      overlay: ""
    }
  });
};
