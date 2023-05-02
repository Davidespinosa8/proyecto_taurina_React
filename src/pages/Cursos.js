import React from "react";
import "../styles/Cursos.css";
//import imagenCurso from '../Imagenes/Notebook_fondo.svg';
import imagenCurso2 from '../Imagenes/Pc_cursos.svg'


const Cursos = () => {
    return (
        <div className="curso" id="cursos">
            <div className="curso-contenedor">
                <div className="curso-info">
                    <h2>Cursos y talleres de manicuria</h2>
                    <p>🌟 ¡Aprende manicuria con nuestros cursos! 💅 Domina técnicas como semipermanente, capping, esculpidas, soft gel y press on. ¡Inscríbete y luce uñas fabulosas! 🚀✨</p>
                </div>
                <div className="curso-imagen-container">
                    <img src={imagenCurso2} alt="Imagen del curso" className="curso-imagen" />
                </div>
                <div>
                    <ul className="curso-beneficios">
                        <h3>Beneficios:</h3>
                        <li>💅 ¡Transforma tus uñas en obras de arte y conviértete en un experto en manicura! 🎨</li>
                        <li>📈 Potencia tu carrera como manicurista y amplía tus oportunidades laborales. 🌟</li>
                        <li>🕑 Aprende a tu ritmo con acceso ilimitado a clases en línea. 🖥️</li>
                        <li>🌐 Únete a nuestra comunidad global y conecta con otros amantes de la manicura. 👯</li>
                        <li>🧠 Adquiere habilidades únicas con nuestras técnicas exclusivas. 💎</li>
                        <li>🎁 Sorprende a tus amigos y familiares con manicuras personalizadas y creativas. 🎉</li>
                        <li>💰 Aprovecha nuestras promociones y descuentos en productos de manicura. 🛍️</li>
                        <li>🏆 Certifícate como profesional en manicuria y destaca en el mercado. 🌟</li>
                        <li>🧘‍♀️ Convierte la manicura en tu momento de relajación y auto-cuidado. 💖</li>
                        <li>🎓 Continúa aprendiendo con nuestros talleres y actualizaciones constantes. 🚀</li>
                    </ul>
                    <p className="curso-costo">Costo: $100</p>
                </div>
            </div>
        </div>
    );
};

export default Cursos;
