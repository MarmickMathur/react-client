import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header"> {error}</div>
        </div>
      );
    } else {
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
      // /> basically same as <input {...input} autoComplete="off" />
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          label="enter title"
          //   value={this.props.formValues.title}
          component={this.renderInput}
        />
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
  form: "editForm",
  validate: validate,
})(StreamForm);

export default formWarped;
