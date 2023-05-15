import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { format, addDays } from "date-fns";
import "../styles/Agenda.css";
import "react-datepicker/dist/react-datepicker.css";
import firebase, { getTurnosByDate, addTurno } from "./firebase";
import AppointmentForm from "./Agenda/AppointmentForm";



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

const generateAllSlots = (date) => {
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

const getAvailableSlots = async (date) => {
    const dateString = format(date, "dd/MM/yyyy");
    const querySnapshot = await getTurnosByDate(dateString);
    const reservedSlots = querySnapshot.docs.map((doc) => doc.data().hora);
    const allSlots = generateAllSlots(date);
    return allSlots.filter((slot) => !reservedSlots.includes(slot));
};

const Agenda = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [userData, setUserData] = useState({});
    const [isReserved, setIsReserved] = useState(false);
    const [isThankYouMessageVisible, setIsThankYouMessageVisible] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
        const slots = await getAvailableSlots(new Date());
        setAvailableSlots(slots);
        };
        fetchData();
    }, []);

    const handleDateChange = async (date) => {
        setStartDate(date);
        const slots = await getAvailableSlots(date);
        setAvailableSlots(slots);
    };

    const handleSlotClick = (slot) => {
        setSelectedSlot(slot);
        setShowForm(true);
        setAvailableSlots(availableSlots.filter((availableSlot) => availableSlot !== slot));
    };

    const handleFormSubmit = (data) => {
        if (data.name && data.lastName && data.phone) {
    
        const turno = {
            fecha: format(startDate, "dd/MM/yyyy"),
            hora: selectedSlot.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
            ...data,
        };
    
        addTurno(turno).then(async () => {
            setIsReserved(true);
            setShowForm(false);
            setSelectedSlot(null);
            setIsThankYouMessageVisible(true);
            const slots = await getAvailableSlots(startDate);
            setAvailableSlots(slots);
        });
        } else {
            alert("Por favor, complete el formulario antes de continuar.");
        }
    };
    
    const handleWhatsApp = () => {
        if (isReserved) {
            const turno = {
                Fecha: format(startDate, "dd/MM/yyyy"),
                Hora: selectedSlot.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                ...userData,
            };
    
            const message = `¡Muchas Gracias por elegir Taurina Nails! El turno que solicitaste es para el ${turno.Fecha} a las ${turno.Hora}.`;
    
            // Número de teléfono del usuario
            const userPhone = userData.phone.startsWith('+') || userData.phone.startsWith('54') ? userData.phone : `+54${userData.phone}`;
            const userUrl = `https://wa.me/${userPhone}?text=${encodeURIComponent(message)}`;
            window.open(userUrl, "_blank");
    
            // Tu número de teléfono
            const myPhone = "+542364357363"; // Reemplaza esto con tu número de teléfono
            const myUrl = `https://wa.me/${myPhone}?text=${encodeURIComponent(message)}`;
            window.open(myUrl, "_blank");
        } else {
            alert("Por favor, complete el formulario y reserve un turno antes de continuar.");
        }
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
            <select className="available-slots" onChange={(e) => handleSlotClick(new Date(e.target.value))}>
                <option value="">Seleccione un turno</option>
                {availableSlots.map((slot, index) => (
                    <option key={index} value={slot.toISOString()}>
                        {slot.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </option>
                ))}
            </select>
            {showForm && (
            <AppointmentForm
                onSubmit={handleFormSubmit}
                selectedSlot={selectedSlot}
                startDate={startDate}
                setIsReserved={setIsReserved}
                handleWhatsApp={handleWhatsApp}
            />
            )}
            {isThankYouMessageVisible && (
                <p className="thank-you-message">
                    ¡Muchas Gracias por elegir Taurina Nails! El turno que solicitaste es para el {format(startDate, "dd/MM/yyyy")} a las {selectedSlot?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.
                </p>
            )};
        </div>
    );
};

export default Agenda;