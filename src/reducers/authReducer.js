const INTITIAL_STATE = {
  IsSignedIn: null,
};

const authreducer = (user = INTITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...user, IsSignedIn: true };
    case "SIGN_OUT":
      console.log("sign out actoin reacieved ");
      return { ...user, IsSignedIn: false };
    default:
      return user;
  }
};

export default authreducer;
