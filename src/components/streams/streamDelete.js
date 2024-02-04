import React from "react";
import Modal from "../modal";

const StreamDelete = () => {
  const action = () => {
    return (
      <React.Fragment>
        <button className="ui button negative">delete</button>
        <button className="ui button"> cancel</button>
      </React.Fragment>
    );
  };

  return (
    <div>
      delete
      <Modal
        header="delete"
        content="are you sure"
        action={action()}
        onDismiss="/"
      />
    </div>
  );
};

export default StreamDelete;
