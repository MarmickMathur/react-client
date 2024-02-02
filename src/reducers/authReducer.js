const INTITIAL_STATE = {
  IsSignedIn: null,
  email: null,
};

const authreducer = (user = INTITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...user, IsSignedIn: true, email: action.payload };
    case "SIGN_OUT":
      console.log("sign out actoin reacieved ");
      return { ...user, IsSignedIn: false, email: null };
    default:
      return user;
  }
};

export default authreducer;
