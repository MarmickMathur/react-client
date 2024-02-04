import React from "react";
import Modal from "../modal";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import history from "../../history";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  action = () => {
    return (
      <React.Fragment>
        <button
          onClick={(e) => this.props.deleteStream(this.props.match.params.id)}
          className="ui button negative"
        >
          delete
        </button>
        <Link to="/" className="ui button">
          cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent() {
    if (!this.props.stream) {
      return "are you sure you want to delet this stream ?";
    }

    return `are you sure you want to delet ${this.props.stream.title} stream ?`;
  }

  render() {
    return (
      <Modal
        header="delete"
        content={this.renderContent()}
        action={this.action()}
        onDismiss={() => {
          history.push("/");
        }}
      />
    );
  }
}

const mapStateToParams = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToParams, {
  fetchStream: fetchStream,
  deleteStream,
})(StreamDelete);
