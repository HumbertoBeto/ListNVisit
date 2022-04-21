//import { InputBase } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { searchLocations } from "../../actions";
import { Paper, Divider, IconButton, InputBase } from "@mui/material";
import { makeStyles } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

class SearchBarInput extends React.Component {
  render() {
    const myStyle = {
      paper: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
      },
      input: {
        marginLeft: 1,
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
    };
    return (
      <Paper component="form" style={myStyle.paper}>
        <InputBase
          placeholder="Find Places"
          inputProps={{ "aria-label": "find places" }}
          style={myStyle.input}
        />
        <Divider orientation="vertical" style={myStyle.divider} />
        {/* <InputBase
          placeholder="In location"
          inputProps={{ "aria-label": "in location" }}
          style={myStyle.input}
        /> */}
        <IconButton
          style={myStyle.iconButton}
          color="primary"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

export default connect(null, { searchLocations })(SearchBarInput);
