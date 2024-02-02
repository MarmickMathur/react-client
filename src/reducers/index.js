import { combineReducers } from "redux";
import authreducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";

const reducers = combineReducers({
  streams: streamReducer,
  auth: authreducer,
  form: formReducer,
});

export default reducers;
