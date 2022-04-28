import React from "react";
import { toggleAddForm } from "../../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Dialog, TextField, Grid, Button } from "@mui/material";
import Search from "@mui/icons-material/Search";

class SearchResultAdd extends React.Component {
  // renderInput({ input, label }) {
  //   return (
  //     <div className="field">
  //       <label>{label}</label>
  //       <input {...input} />
  //     </div>
  //   );
  // }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInputDate = ({ input, label, meta }) => {
    return (
      <div>
        <TextField
          {...input}
          id="date"
          label={label}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderInputTime = ({ input, label, meta }) => {
    return (
      <div>
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
        {this.renderError(meta)}
      </div>
    );
  };

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

  onSubmit = (formProps) => {
    console.log(formProps);
    this.props.toggleAddForm();
  };

  render() {
    console.log("PAGE CONTROLS: ", this.props.pageControls.addFormShow);
    return (
      // <form
      //   onSubmit={this.props.handleSubmit(this.onSubmit)}
      //   className="ui form"
      // >
      //   <Field
      //     name="date"
      //     component={this.renderInputDate}
      //     label="Enter Planned Date"
      //   />

      //   <Field
      //     name="time"
      //     component={this.renderInputTime}
      //     label="Enter Expected time of Arrival"
      //   />

      //   <Field
      //     name="notes"
      //     component={this.renderInputNotes}
      //     label="Enter Notes (optional)"
      //   />
      //   <button>Add to Trip</button>
      // </form>
      <Dialog
        open={this.props.pageControls.addFormShow}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="md"
      >
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item md={3}>
              <Field
                name="date"
                component={this.renderInputDate}
                label="Enter Planned Date"
              />
            </Grid>
            <Grid item md={3}>
              <Field
                name="time"
                component={this.renderInputTime}
                label="Enter Expected time of Arrival"
              />
            </Grid>
            <Grid item md={6}>
              <Field
                name="notes"
                component={this.renderInputNotes}
                label="Enter Notes (optional)"
              />
            </Grid>
            <button>Add to Trip</button>
          </Grid>
        </form>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => {
  return { pageControls: state.pageControls };
};

SearchResultAdd = connect(mapStateToProps, { toggleAddForm })(SearchResultAdd);

const validate = (formValues) => {
  const errors = {};

  if (!formValues.date) {
    errors.date = "You must enter a date of arrival for this location";
  }

  if (!formValues.time) {
    errors.time = "You must enter a time of arrival for this location";
  }

  return errors;
};

export default reduxForm({
  form: "searchResultAdd",
  validate,
})(SearchResultAdd);
