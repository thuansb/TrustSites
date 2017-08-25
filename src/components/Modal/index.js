import React from 'react';
import './styles.scss';

function Modal({ isOpen, toggleModal, children }) {
    return (
        <div className={`modal ${isOpen && 'is-active'}`}>
        <div className="modal-background"></div>
        <div className="modal-content box">
            {children}
        </div>
        <button
            onClick={toggleModal}
            className="modal-close is-large"
            aria-label="close"></button>
    </div>
    )
}

export default Modal;