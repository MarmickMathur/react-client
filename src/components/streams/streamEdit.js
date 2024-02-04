import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./streamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  handleSubmit = (formValues) => {
    console.log(formValues);
    this.props.editStream(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>loading</div>;
    }
    return (
      <div>
        <h3>edit stream</h3>
        <StreamForm
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description,
          }}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const stream = state.streams[ownProps.match.params.id];
  return { stream: stream };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
