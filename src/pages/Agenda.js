import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { format, addDays } from "date-fns";
import { AiOutlineWhatsApp } from "react-icons/ai";
import "../styles/Agenda.css";
import "react-datepicker/dist/react-datepicker.css";
import Turno from "./Agenda/Turnos";
import FormularioCita from "./Agenda/FormularioCita";

const WEEKDAYS = {
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
};

const WEEKDAY_HOURS = {
    start: "09:00",
    end: "18:00",
    interval: 30, // en minutos
};

const SATURDAY_HOURS = {
    start: "10:00",
    end: "14:00",
    interval: 30, // en minutos
};

const getAvailableSlots = (date) => {
    const day = date.getDay();
    const hoursConfig = day === WEEKDAYS.SATURDAY ? SATURDAY_HOURS : WEEKDAY_HOURS;

    const start = new Date(date);
    const [startHour, startMinute] = hoursConfig.start.split(":");
    start.setHours(startHour, startMinute, 0, 0);

    const end = new Date(date);
    const [endHour, endMinute] = hoursConfig.end.split(":");
    end.setHours(endHour, endMinute, 0, 0);

    const slots = [];
    while (start < end) {
        slots.push(new Date(start));
        start.setMinutes(start.getMinutes() + hoursConfig.interval);
    }

    return slots;
};

const Agenda = () => {

    const [selectedSlot, setSelectedSlot] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState([]);

    useEffect(() => {
        setAvailableSlots(getAvailableSlots(new Date()));
    }, []);

    const handleDateChange = (date) => {
        setStartDate(date);
        setAvailableSlots(getAvailableSlots(date));
    };

    const handleSlotClick = (slot) => {
        setSelectedSlot(slot);
        setShowForm(true);
        setAvailableSlots(availableSlots.filter((availableSlot) => availableSlot !== slot));
    };

    const handleWhatsApp = () => {
        if (!selectedSlot) {
            alert("Por favor, seleccione un turno antes de continuar.");
            return;
        }

        const message = `Hola, me gustaría reservar un turno para manicura el ${format(
            startDate,
            "dd/MM/yyyy"
        )} a las ${selectedSlot.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        })}.`;
        const url = `https://wa.me/+542364357363?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };
    
    return (
        <div className="agenda" id="agenda">
            <h1>Agenda</h1>
            <p>Calendario de eventos y citas...</p>
            <div className="date-picker">
                <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 30)}
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <ul className="available-slots">
                {availableSlots.map((slot, index) => (
                    <Turno key={index} slot={slot} onClick={() => handleSlotClick(slot)} />
                ))}
            </ul>
            {showForm && (
                <FormularioCita />
            )}
            <button className="whatsapp-button" onClick={handleWhatsApp}>
                <AiOutlineWhatsApp /> Reservar turno
            </button>
        </div>
    );
};    
    
export default Agenda;
