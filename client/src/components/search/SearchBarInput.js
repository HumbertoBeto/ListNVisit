//import { InputBase } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { searchLocations } from "../../actions";
import { Paper, Divider, IconButton, InputBase } from "@mui/material";
import { makeStyles } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { formValues } from "redux-form";

class SearchBarInput extends React.Component {
  renderSearchBar = ({ input, label, meta }) => {
    const myStyle = {
      paper: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "800px",
        marginRight: "350px",
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
      <InputBase
        {...input}
        placeholder={label}
        inputProps={{ "aria-label": "find places" }}
        style={myStyle.input}
      />
    );
  };

  onSubmit = (formValues) => {
    this.props.searchLocations(formValues.search);
    console.log("FORM Values: ", formValues.search);
  };

  render() {
    const myStyle = {
      paper: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "800px",
        marginRight: "350px",
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
      <Paper
        component="form"
        style={myStyle.paper}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="search"
          component={this.renderSearchBar}
          label="Find Places"
        />
        <Divider orientation="vertical" style={myStyle.divider} />
        {/* <InputBase
              placeholder="In location"
              inputProps={{ "aria-label": "in location" }}
              style={myStyle.input}
            /> */}
        {/* <IconButton
            style={myStyle.iconButton}
            color="primary"
            aria-label="search"
          >
            <SearchIcon />
          </IconButton> */}
        <button>search</button>
      </Paper>
    );
  }
}

const formWrapped = reduxForm({
  form: "searchBarInput",
})(SearchBarInput);

export default connect(null, { searchLocations })(formWrapped);
