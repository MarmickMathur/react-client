import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
  CREATE_STREAM,
} from "./types";
import history from "../history";

export const signIn = (email) => {
  return {
    type: SIGN_IN,
    payload: email,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.email;
    const res = await streams.post("/streams", { ...formValues, userId });
    dispatch({
      type: CREATE_STREAM,
      payload: res.data,
    });
    history.push("/");
    // place for programatic navigation
  };
};

export const fetchStreams = () => {
  return async (dispatch, getState) => {
    const res = await streams.get("/streams");

    dispatch({
      type: FETCH_STREAMS,
      payload: res.data,
    });
  };
};

export const fetchStream = (id) => {
  return async (dispatch, getState) => {
    const res = await streams.get(`/streams/${id}`);

    dispatch({
      type: FETCH_STREAM,
      payload: res.data,
    });
  };
};

export const editStream = (id, formValues) => {
  return async (dispatch, getState) => {
    console.log(formValues);
    const res = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: res.data });
    // console.log("ok edited");
    history.push("/");
  };
};

export const deleteStream = (id) => {
  return async (dispatch, getState) => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
    history.push("/");
  };
};
