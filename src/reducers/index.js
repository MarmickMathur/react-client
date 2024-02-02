import { combineReducers } from "redux";
import authreducer from "./authReducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  auth: authreducer,
  form: formReducer,
});

export default reducers;
