import { combineReducers } from "redux";
import authreducer from "./authReducer";
const reducers = combineReducers({
  auth: authreducer,
});

export default reducers;
