import React, { useState, useEffect } from "react";
import "../styles/Cursos.css";
import imagenCurso2 from "../Imagenes/Pc_cursos.svg";
import Button from "./Cursos/Button";
import { collection, getDocs } from "firebase/firestore";
import db  from "./firebase";
import CourseModal from "./Cursos/CourseModal";

const Cursos = ({ onInscribirseClick }) => {
    const [cursos, setCursos] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        const obtenerCursos = async () => {
        const cursosCollection = collection(db, "Cursos");
        const cursosSnapshot = await getDocs(cursosCollection);
        const cursosList = cursosSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setCursos(cursosList);
        };

        obtenerCursos();
    }, []);

    // const handleCourseClick = (curso) => {
    //     setSelectedCourse(curso);
    // };

    const handleCloseModal = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="curso" id="cursos">
            <div className="curso-contenedor">
                {cursos.map((curso) => (
                    <div key={curso.id}>
                        <div className="curso-imagen-container">
                            <img src={imagenCurso2} alt="Imagen del curso" className="curso-imagen" />
                        </div>
                        <div className="curso-detalles">
                            <h2>{curso.titulo}</h2>
                            <p>{curso.descripcion}</p>
                            <ul className="curso-beneficios">
                                <li>Maximiza tus ingresos y desbloquea oportunidades laborales en el creciente mercado de la belleza.</li>
                                <li>Aprende a tu ritmo con acceso ilimitado a clases en línea y actualizaciones constantes.</li>
                                <li>Certifícate como profesional en manicuría y destaca en un mercado competitivo.</li>
                                <li>Conecta con nuestra comunidad global de entusiastas de la manicuría y comparte tus conocimientos y creaciones.</li>
                            </ul>
                            <p className="curso-costo">Costo: ${curso.precio}</p>
                            <Button onClick={() => onInscribirseClick(curso)} content="Inscribite ahora!" />
                        </div>
                    </div>
                ))}
        </div>
        {selectedCourse && (
            <CourseModal
            isOpen={!!selectedCourse}
            onRequestClose={handleCloseModal}
            curso={selectedCourse}
            />
        )}
        </div>
    );
};

export default Cursos;

