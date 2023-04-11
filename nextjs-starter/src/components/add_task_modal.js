import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ title, content, isActive, onClose }) => {
  const [modalActive, setModalActive] = useState(isActive);

  const handleClose = () => {
    setModalActive(false);
    onClose();
  };

  return (
    <div className={`modal ${modalActive ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close" onClick={handleClose}></button>
        </header>
        <section className="modal-card-body">{content}</section>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;