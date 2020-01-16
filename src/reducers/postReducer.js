import { SET_OVERLAY, REMOVE_OVERLAY } from "../actions/type";

const initialState = {
  overlay: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_OVERLAY:
      return { ...state, payload };
      break;
    case REMOVE_OVERLAY:
      return { ...state, payload };
    default:
      return state;
  }
}
