import React, { useState } from "react";

const AppointmentForm = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, lastName, phone });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="lastName">Apellido:</label>
            <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="phone">Teléfono:</label>
            <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default AppointmentForm;
