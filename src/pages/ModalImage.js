import React from 'react';
import '../styles/ModalImage.css';

const ModalImage = ({ image, closeModal }) => {
    return (
        <div className="modal-image-backdrop" onClick={closeModal}>
            <div className="modal-image-content">
                <img src={image} alt="Imagen seleccionada" />
            </div>
        </div>
    );
};

export default ModalImage;
