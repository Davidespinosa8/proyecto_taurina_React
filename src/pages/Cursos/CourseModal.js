import React from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

const CourseModal = ({ isOpen, onRequestClose, curso, onEnrollClick }) => {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Curso Modal"
        >
        <h2>{curso.titulo}</h2>
        <p>{curso.descripcion}</p>
        <p className="curso-costo">Costo: ${curso.precio}</p>
        <button onClick={onEnrollClick}>Inscribirme</button>
        <button onClick={onRequestClose}>Cerrar</button>
        </Modal>
    );
};

export default CourseModal;
