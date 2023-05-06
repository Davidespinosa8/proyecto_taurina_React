import React from "react";
import "../styles/Cursos.css";
import imagenCurso2 from "../Imagenes/Pc_cursos.svg";
import Button from "./Cursos/Button";

const Cursos = () => {
    return (
        <div className="curso" id="cursos">
            <div className="curso-contenedor">
                <div className="curso-imagen-container">
                    <img src={imagenCurso2} alt="Imagen del curso" className="curso-imagen" />
                </div>
                <div className="curso-detalles">
                    <h2>Cursos y Talleres de Manicuría</h2>
                    <p>Aprende las técnicas más demandadas y conviértete en un profesional altamente calificado en manicuría.</p>
                    <ul className="curso-beneficios">
                        <li>Maximiza tus ingresos y desbloquea oportunidades laborales en el creciente mercado de la belleza.</li>
                        <li>Aprende a tu ritmo con acceso ilimitado a clases en línea y actualizaciones constantes.</li>
                        <li>Certifícate como profesional en manicuría y destaca en un mercado competitivo.</li>
                        <li>Conecta con nuestra comunidad global de entusiastas de la manicuría y comparte tus conocimientos y creaciones.</li>
                    </ul>
                    <p className="curso-costo">Costo: $100</p>
                    <Button href='https://www.instagram.com/taurinanails_/' 
                    content='Inscribite ahora!' />
                </div>
            </div>
        </div>
    );
};

export default Cursos;