import { combineReducers } from "redux";
import PostReducer from "./postReducer";
import overlayReducer from "./overLayReducer";

export default combineReducers({
  overlayReducer,
  PostReducer
});
