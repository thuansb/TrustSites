import React from 'react';
import Dialog from 'material-ui/Dialog';

function Modal({ isOpen, toggleModal, children, title }) {
    return (
        <Dialog
            title={title}
            modal={false}
            open={isOpen}
            onRequestClose={toggleModal}>
            {children}
        </Dialog>
    )
}

export default Modal;