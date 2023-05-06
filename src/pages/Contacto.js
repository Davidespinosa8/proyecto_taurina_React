import React from "react";
import "../styles/Contacto.css";

const Contacto = () => {
    return (
        <div className="contacto" id="contacto">
            <h1>Contacto</h1>
            <div className="card">
                <div className="contact-info">
                    <h2>Información de contacto</h2>
                    <p>Teléfono: +1 (123) 456-7890</p>
                    <p>Email: example@example.com</p>
                    <a href="https://wa.me/11234567890" className="whatsapp-button" target="_blank" rel="noopener noreferrer">Enviar mensaje de WhatsApp</a>
                </div>
                <div className="contact-form">
                    <h2>Formulario de contacto</h2>
                    <form>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
