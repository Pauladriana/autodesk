import React from "react";

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { ModalContainer, ModalHeader, ModalWrapper } from './ModalStyle'

const Modal = ({ children, title, closeModal }) => {

  return (
    <ModalWrapper>
    <ModalContainer>
      <ModalHeader>
      <p>{title}</p>

      <div
      onClick={() => closeModal(false)}>
      <IconButton aria-label="delete" disabled color="primary">
        <CloseIcon/>
      </IconButton>
      </div>
      
      </ModalHeader>
      
        <div>
          {children}
        </div>

    </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
