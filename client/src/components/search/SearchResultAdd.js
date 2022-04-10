import React from "react";
import { Field, reduxForm } from "redux-form";
import { TextField, Grid } from "@mui/material";

class SearchResultAdd extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  renderInputDate({ input, label }) {
    return (
      <TextField
        {...input}
        id="date"
        label={label}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    );
  }

  renderInputTime({ input, label }) {
    return (
      <TextField
        {...input}
        id="time"
        label={label}
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    );
  }

  renderInputNotes({ input, label }) {
    return (
      <TextField
        {...input}
        id="outlined-multiline-static"
        label={label}
        placeholder="Placeholder"
        multiline
        rows={2}
        variant="outlined"
      />
      // <div className="field">
      //   <label>{label}</label>
      //   <textarea rows="2" {...input}></textarea>
      // </div>
    );
  }

  render() {
    //console.log(this.props);
    return (
      <form className="ui form">
        <Grid
          container
          direction="column"
          justifyContent="space-evently"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={4}>
            <Field
              name="date"
              component={this.renderInputDate}
              label="Enter Planned Date"
            />
          </Grid>
          <Grid item xs={4}>
            <Field
              name="time"
              component={this.renderInputTime}
              label="Enter Expected time of Arrival"
            />
          </Grid>
          <Grid item xs={4}>
            <Field
              name="notes"
              component={this.renderInputNotes}
              label="Enter Notes (optional)"
            />
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default reduxForm({
  form: "searchResultAdd",
})(SearchResultAdd);
