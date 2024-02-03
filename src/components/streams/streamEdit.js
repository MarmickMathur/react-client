import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./streamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  handleSubmit = (formValues) => {
    // this.props.
    // console.log(this.props.stream.id);
    // console.log(formValues);
    this.props.editStream(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>loading</div>;
    }
    return <StreamForm onSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const stream = state.streams[ownProps.match.params.id];
  return { stream: stream };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
