import streams from "../apis/streams";

export const signIn = (email) => {
  return {
    type: "SIGN_IN",
    payload: email,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const res = await streams.post("/streams", formValues);
  };
};
