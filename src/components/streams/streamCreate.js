import React from "react";
import { createStream } from "../../actions/index";
import { connect } from "react-redux";
import StreamForm from "./streamForm";

class StreamCreate extends React.Component {
  onSubmit = async (formValues) => {
    this.props.createStream(formValues);
    // console.log(formvalues);
  };

  handleSubmit = (formvalues) => {
    this.props.createStream(formvalues);
  };

  render() {
    return <StreamForm onSubmit={this.handleSubmit} />;
  }
}

export default connect(null, {
  createStream: createStream,
})(StreamCreate);
