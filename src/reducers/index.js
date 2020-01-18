import { combineReducers } from "redux";
import PostReducer from "./postReducer";
import overlayReducer from "./overLayReducer";
import AuthReducer from "./authReducer";

export default combineReducers({
  overlayReducer,
  PostReducer,
  AuthReducer
});
