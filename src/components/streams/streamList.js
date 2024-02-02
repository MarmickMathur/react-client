import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/index";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    console.log(stream);
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">edit</button>
          <button className="ui button negative">delete</button>
        </div>
      );
    }
  };

  renderCreate = () => {
    console.log(this.props.isSignedIn);
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to={"/streams/new"} className="ui button primary">
            create a new stream
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description"> {stream.description}</div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h2>streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.email,
    isSignedIn: state.auth.IsSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
