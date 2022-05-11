import React from "react";
import { connect } from "react-redux";
//import { useHistory } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import Background from "../images/background.jpg";
import { Paper, Box, Grid, Item } from "@mui/material";
// import { urlencoded } from "express";

class Login extends React.Component {
  render() {
    return (
      <div
        style={{
          // paddingTop: "25%",
          // marginLeft: "auto",
          // marginRight: "auto",
          // width: "8em",
          // backgroundColor: "#dc4c3f",
          // background: "#dc4c3f",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          position: "absolute",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        }}
      >
        {/* <button className="mdc-button mdc-button--raised">
          <span className="mdc-button__label">Login With Google</span>
        </button> */}
        <div
          style={{
            paddingTop: "25%",
            marginLeft: "auto",
            marginRight: "auto",
            width: "8em",
          }}
        >
          <h1 style={{ fontSize: "35px", color: "white" }}>ListNVisit</h1>
          <div style={{ marginLeft: "29px" }}>
            <GoogleAuth />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, {})(Login);
