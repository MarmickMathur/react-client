import React from "react";
import { jwtDecode } from "jwt-decode";

class GoogleAuth extends React.Component {
  state = { user: {} };

  signout = () => {
    window.localStorage.removeItem("userJwtToken");
    this.setState({ user: {} });
  };

  renderButton = () => {
    if (Object.keys(this.state.user).length === 0) {
      console.log("needs sign in");
      document.getElementById("signInDiv").style.display = "block";
      document.getElementById("signOutDiv").style.display = "none";
    } else {
      console.log("needs sign out");
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
    console.log(jwtToken);
    if (jwtToken !== null) {
      const userObject = jwtDecode(jwtToken);
      console.log("jwt :", jwtToken);
      this.setState({ user: userObject });
    }

    window.google.accounts.id.initialize({
      client_id:
        "471972674150-ieddb11lmqgf9pfiu7egpmucqm0ldsmr.apps.googleusercontent.com",
      callback: (response) => {
        const userObject = jwtDecode(response.credential);
        window.localStorage.setItem(
          "userJwtToken",
          JSON.stringify(response.credential)
        );
        this.setState({ user: userObject });
      },
    });
    console.log(window.google.accounts.id);

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

export default GoogleAuth;
