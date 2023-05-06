import React from "react";

const FormularioCita = () => {
    return (
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" />
            <br />
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" />
            <br />
            <label htmlFor="telefono">Teléfono:</label>
            <input type="text" id="telefono" name="telefono" />
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioCita;

