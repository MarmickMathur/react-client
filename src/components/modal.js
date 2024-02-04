import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
  const cancelModal = () => {
    props.onDismiss();
  };

  return ReactDOM.createPortal(
    <div onClick={cancelModal} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.header}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.action}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
