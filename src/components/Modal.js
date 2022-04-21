import React from "react";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ children, title, action, closeModal }) => {

  return (
    <div
      style={{
        width: "40vw",
        height: "80vh",
        position: "absolute",
        backgroundColor: "pink",
        zIndex: 100,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >

      <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem 1rem"
      }}>
      <h2>{title}</h2>
      <div
      onClick={() => closeModal(false)}>
      <IconButton aria-label="delete" disabled color="primary">
        <CloseIcon/>
      </IconButton>
      </div>
      
      </div>
      
        <div>
          {children}
        </div>

    </div>
  );
};

export default Modal;
