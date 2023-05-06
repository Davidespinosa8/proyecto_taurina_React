import React from "react";
import "./Turnos.css";

const Turno = ({ slot, onClick }) => {
    return (
        <li className="turno" onClick={onClick}>
            {slot.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </li>
    );
};

export default Turno;
