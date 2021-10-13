import styled, { keyframes } from "styled-components";

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalBlock = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalOverlay = styled.a`
  background: rgba(155, 976, 345, 0.85);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  animation: ${fadeIn} 0.5s;
`;

export const ModalClose = styled.a`
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 850px;
  max-height: 75vh;
  background: #ffffff;
  border-radius: 0.3rem;
  padding: 0 0.8rem;
  animation: ${appearFromTop} 0.5s;

  transition: 0.5s;
  box-shadow: 0 0.5rem 2rem rgba(48, 55, 66, 0.2);
  z-index: 1;
`;

export const ModalBody = styled.div`
  padding: 30px 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;

export const ModalTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
`;

export const ModalFooter = styled.div`
  padding: 10px 0px;
  text-align: right;
`;
