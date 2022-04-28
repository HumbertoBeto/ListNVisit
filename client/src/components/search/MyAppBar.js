import React from "react";
import GoogleAuth from "../GoogleAuth";
import SearchBarInput from "./SearchBarInput";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

class MyAppBar extends React.Component {
  render() {
    const myStyle = {
      root: {
        flexGrow: 1,
      },
      menuButton: {
        // marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        // marginRight: "800px",
      },
      topBar: {
        backgroundColor: "#FFB2A6",
      },
    };
    return (
      <div style={myStyle.root}>
        <AppBar position="static" style={myStyle.topBar}>
          <Toolbar>
            <IconButton
              edge="start"
              style={myStyle.root}
              color="inherit"
              aria-label="menu"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" style={myStyle.title}>
              ListNVisit
            </Typography>
            <SearchBarInput />
            <GoogleAuth />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default MyAppBar;
