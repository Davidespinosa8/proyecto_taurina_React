import React from "react";
import "../styles/Inicio.css";
import herramientas from "../Imagenes/Taurina_IMG/Taurina_Nails.jpeg";

const Inicio = () => {
    return (
        <div id="inicio" className="inicio">
            <img src={herramientas} alt="Herramientas" className="imagen-inicio" />
            <div className="contenido-inicio">
                <h1>Bienvenido a Taurina Nails</h1>
                <p>El mejor lugar para aprender y disfrutar del arte de las uñas.</p>
            </div>
        </div>
    );
};

export default Inicio;


