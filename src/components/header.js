import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./googleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Kwitch
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          all streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
