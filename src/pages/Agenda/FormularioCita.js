import React from "react";

const FormularioCita = ({ handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" onChange={handleChange} />
            <br />
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" onChange={handleChange} />
            <br />
            <label htmlFor="telefono">Teléfono:</label>
            <input type="text" id="telefono" name="telefono" onChange={handleChange} />
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioCita;

