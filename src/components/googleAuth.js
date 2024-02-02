import React from "react";
import { jwtDecode } from "jwt-decode";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  signout = () => {
    window.localStorage.removeItem("userJwtToken");
    this.props.signOut();
  };

  renderButton = () => {
    // console.log(this.props.isSignedIn);
    if (this.props.isSignedIn === null || this.props.isSignedIn === false) {
      // console.log("needs sign in");
      document.getElementById("signInDiv").style.display = "block";
      document.getElementById("signOutDiv").style.display = "none";
    } else {
      // console.log("needs sign out");
      document.getElementById("signInDiv").style.display = "none";
      document.getElementById("signOutDiv").style.display = "block";
    }
  };

  signin = () => {
    window.google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        document.cookie = `g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        window.google.accounts.id.prompt();
      }
    });
  };

  componentDidMount() {
    const jwtToken = JSON.parse(window.localStorage.getItem("userJwtToken"));
    // console.log(jwtToken);
    if (jwtToken !== null) {
      const userObject = jwtDecode(jwtToken);
      this.props.signIn(userObject.email);
    }

    window.google.accounts.id.initialize({
      client_id:
        "471972674150-ieddb11lmqgf9pfiu7egpmucqm0ldsmr.apps.googleusercontent.com",
      callback: (response) => {
        window.localStorage.setItem(
          "userJwtToken",
          JSON.stringify(response.credential)
        );
        const userObject = jwtDecode(jwtToken);
        this.props.signIn(userObject.email);
      },
    });
    this.renderButton();
  }

  componentDidUpdate() {
    this.renderButton();
  }

  render() {
    return (
      <div>
        <button
          id="signInDiv"
          className="ui red google button"
          onClick={this.signin}
        >
          <i className="google icon white" />
          sign in
        </button>
        <button
          id="signOutDiv"
          className="ui red google button"
          onClick={this.signout}
        >
          <i className="google icon white" />
          sign out
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.IsSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
