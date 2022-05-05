import React from "react";
import {
  toggleAddForm,
  addListLocation,
  getList,
  toggleEditForm,
  updateListItem,
} from "../../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Dialog, TextField, Grid, Button } from "@mui/material";

class ListEdit extends React.Component {
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
          // placeholder="2022-05-11"
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
        placeholder="My Notes"
        multiline
        rows={2}
        variant="outlined"
      />
    );
  }

  onSubmit = async (formProps) => {
    // await this.props.addListLocation(
    //   this.props.pageControls.chosenSearchLocation,
    //   formProps
    // );
    // await this.props.getList();

    await this.props.updateListItem(
      this.props.pageControls.listItemChosen,
      formProps
    );
    await this.props.getList();
    console.log("EDIT PROPS:", formProps);
  };

  onCancel = () => {
    // await this.props.addListLocation(
    //   this.props.pageControls.chosenSearchLocation,
    //   formProps
    // );
    // await this.props.getList();
    this.props.toggleEditForm();

    console.log("Cancel CLICKED");
  };
  render() {
    return (
      <Dialog
        open={this.props.pageControls.editFormShow}
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
                label="New Date:"
              />
            </Grid>
            <Grid item md={3}>
              <Field
                name="time"
                component={this.renderInputTime}
                label="New Arrival Time:"
              />
            </Grid>
            <Grid item md={6}>
              <Field
                name="notes"
                component={this.renderInputNotes}
                label="New Notes:"
              />
            </Grid>
            <button>Update</button>
            <button type="button" onClick={this.onCancel}>
              Cancel
            </button>
          </Grid>
        </form>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => {
  return { pageControls: state.pageControls };
};

ListEdit = connect(mapStateToProps, {
  toggleAddForm,
  addListLocation,
  getList,
  toggleEditForm,
  updateListItem,
})(ListEdit);

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
  form: "listEdit",
  validate,
})(ListEdit);
