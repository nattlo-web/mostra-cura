import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  display: ${(props) => {
    const { openModal } = props;
    return !openModal ? "none" : "flex";
  }};
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  z-index: 30;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  overflow-y: initial;
  overflow-x: auto;
`;

export const ModalWrapper = styled.div`
  width: 60%;
  max-height: 500px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 24px 16px;
  overflow-y: scroll;
  z-index: 9999;
  ${({ customStyle }) => customStyle}
`;

export const GoBackButton = styled.button`
  background-color: transparent;
  font-size: 34px;
  color: var(--color-primary);
  border-color: transparent;
  outline: none;
  margin-left: auto;
  cursor: pointer;
  /* &:hover {
    border: 2px solid var(--color-orange);
    color: var(--color-orange);
  } */
`;
