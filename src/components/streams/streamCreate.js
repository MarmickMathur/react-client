import React from "react";
import { createStream } from "../../actions/index";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class StreamList extends React.Component {
  renderError = ({ error, touched }) => {
    // console.log(error, touched);
    if (touched && error) {
      console.log("returns error");
      return (
        <div className="ui error message">
          <div className="header"> {error}</div>
        </div>
      );
    } else {
      console.log("returns null");
      return null;
    }
  };

  renderInput = ({ input, label, meta }) => {
    // console.log(meta); //meta has errors prop
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // /> basically same as
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
    // console.log(formvalues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" label="enter title" component={this.renderInput} />
        <Field
          name="description"
          label="enter description"
          component={this.renderInput}
        />
        <button className="ui button primary">submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  //validates shit every second
  const errors = {};
  if (!formValues.title) {
    errors.title = "there is not title";
  }

  if (!formValues.description) {
    errors.description = "there is not description";
  }
  return errors;
};

const formWarped = reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamList);

export default connect(null, {
  createStream: createStream,
})(formWarped);
