import React from "react";
import "../styles/Cursos.css";
import imagenCurso from '../Imagenes/Notebook_fondo.svg';

const Cursos = () => {
    return (
        <div className="curso">
            <div className="curso-imagen-container">
                <img src={imagenCurso} alt="Imagen del curso" className="curso-imagen" />
            </div>
            <div className="curso-info">
                <h2>Nombre del curso</h2>
                <p>Descripción del curso...</p>
                <ul className="curso-beneficios">
                    <li>Beneficio 1</li>
                    <li>Beneficio 2</li>
                    <li>Beneficio 3</li>
                </ul>
            <p className="curso-costo">Costo: $100</p>
            </div>
        </div>
    );
};

export default Cursos;
