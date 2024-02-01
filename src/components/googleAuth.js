import React from "react";
import { jwtDecode } from "jwt-decode";

class GoogleAuth extends React.Component {
  state = { user: {} };

  signout = () => {
    window.localStorage.removeItem("userJwtToken");
    // console.log(this);
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

  componentDidMount() {
    const jwtToken = JSON.parse(window.localStorage.getItem("userJwtToken"));
    console.log(jwtToken);
    if (jwtToken !== null) {
      const userObject = jwtDecode(jwtToken);
      console.log("jwt :", jwtToken);
      this.setState({ user: userObject });
    } else {
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

      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {
          theme: "outline",
          size: "large",
        }
      );
    }
    this.renderButton();
  }

  componentDidUpdate() {
    this.renderButton();
  }

  render() {
    return (
      <div>
        <div>
          <div id="signInDiv"></div>
        </div>
        <button id="signOutDiv" onClick={this.signout}>
          sign out
        </button>
      </div>
    );
  }
}

export default GoogleAuth;
