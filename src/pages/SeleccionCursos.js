// components/SeleccionCursos.js
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

const SeleccionCursos = ({ isOpen, onRequestClose, selectedCourse }) => {
    return (
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                style={customStyles}
                contentLabel="Seleccion de Cursos"
                >
                <h2>Seleccion de Cursos</h2>
                {selectedCourse && (
                    <>
                    <h3>{selectedCourse.titulo}</h3>
                    <p>{selectedCourse.descripcion}</p>
                    <p>Costo: ${selectedCourse.precio}</p>
                    </>
                )}
                <p>
                    Descripción del curso.
                </p>
                <button onClick={onRequestClose}>Cerrar</button>
            </Modal>
    );
};

export default SeleccionCursos;

