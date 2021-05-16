import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onDismiss={props.onDismiss} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} onDismiss={props.onDismiss} />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
}

export default ErrorModal;
