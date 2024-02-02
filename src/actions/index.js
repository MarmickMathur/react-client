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
