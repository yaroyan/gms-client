/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = ({ onClose }: { onClose: () => void }) => {
  return <div css={styles.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div css={styles.modal}>
      <div>{children}</div>
    </div>
  );
};

const portalElement: Element | null = document.getElementById('overlays');

const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        portalElement as Element
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement as Element
      )}
    </Fragment>
  );
};

export default Modal;

const styles = {
  modal: css`
    position: fixed;
    top: 15vh;
    left: 5%;
    width: 90%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;

    @media (min-width: 768px) {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  `,
  backdrop: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  `,
  slideDown: keyframes`
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,
};
