import React from "react";
import "../styles/Inicio.css";
import herramientas from "../Imagenes/herramientas.jpg";


const Inicio = () => {
    return (
        <div id="inicio" className="inicio">
            <img src={herramientas} alt="Herramientas" className="imagen-inicio" />
            <div className="contenido-inicio">
            </div>
        </div>
    );
};

export default Inicio;

