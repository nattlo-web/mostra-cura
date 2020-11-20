import React from "react";
import { Wrapper, ModalWrapper, GoBackButton } from "./modal.style";

const Modal = ({ openModal, children, setOpenModal, customStyle }) => {
  const handleClick = (event) => {
    if (event.target === event.currentTarget) setOpenModal(null);
  };
  return (
    <Wrapper openModal={openModal} className="fadeIn">
      <ModalWrapper customStyle={customStyle}>
        <GoBackButton onClick={handleClick}>x</GoBackButton>
        {children}
      </ModalWrapper>
    </Wrapper>
  );
};

export default Modal;
