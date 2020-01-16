import { SET_OVERLAY, REMOVE_OVERLAY } from "../actions/type";

const initialState = {
  overlay: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_OVERLAY:
      return { ...state, overlay: payload.overlay };
      break;
    case REMOVE_OVERLAY:
      return { ...state, overlay: payload.overlay };
      break;
    default:
      return state;
  }
}
