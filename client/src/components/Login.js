import React from "react";
import GoogleAuth from "./GoogleAuth";

const Login = () => {
  return (
    <div>
      {/* <button className="mdc-button mdc-button--raised">
        <span className="mdc-button__label">Login With Google</span>
      </button> */}
      <GoogleAuth />
    </div>
  );
};

export default Login;
