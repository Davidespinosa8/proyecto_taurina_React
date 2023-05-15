import React from "react";

const CursoInfo = ({ curso }) => {
  return (
    <>
      <h2>{curso.titulo}</h2>
      <p>{curso.descripcion}</p>
      <ul className="curso-beneficios">
        <li>
          Maximiza tus ingresos y desbloquea oportunidades laborales en el
          creciente mercado de la belleza.
        </li>
        <li>
          Aprende a tu ritmo con acceso ilimitado a clases en línea y
          actualizaciones constantes.
        </li>
        <li>
          Certifícate como profesional en manicuría y destaca en un mercado
          competitivo.
        </li>
        <li>
          Conecta con nuestra comunidad global de entusiastas de la manicuría y
          comparte tus conocimientos y creaciones.
        </li>
      </ul>
      <p className="curso-costo">Costo: ${curso.precio}</p>
    </>
  );
};

export default CursoInfo;

