import React, { Fragment } from "react";
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./styles";

export default function Modal({ title, footer, children, active, hideModal }) {
  return (
    <>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={hideModal}></ModalOverlay>

          <ModalContainer>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>

              <ModalClose onClick={hideModal}>X</ModalClose>
            </ModalHeader>

            <ModalBody>{children}</ModalBody>

            <ModalFooter>{footer}</ModalFooter>
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
}
