import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const AppointmentForm = ({ onSubmit, selectedSlot, startDate, setIsReserved, handleWhatsApp }) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== "" && lastName !== "" && phone !== "") {
            onSubmit({ name, lastName, phone, isFormComplete: true });
        } else {
            onSubmit({ isFormComplete: false });
        }
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
            <button className="whatsapp-button" onClick={handleWhatsApp}>
            <AiOutlineWhatsApp /> Reservar turno
            </button>
        </form>
    );
};

export default AppointmentForm;
