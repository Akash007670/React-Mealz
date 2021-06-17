import React from "react";
import "./Modal.css";

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const BackDrop = (props) => {
  return <div className="backdrop"></div>;
};

const Modal = (props) => {
  return (
    <>
      <BackDrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
