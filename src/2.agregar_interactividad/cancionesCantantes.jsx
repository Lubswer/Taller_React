import { useState } from "react";
export default function CancionesCantantes({ cancion }) {
  const [indexCancion, setCancion] = useState(0);

  return (
    <li>
      <button
        onClick={() => {
          setCancion(indexCancion + 1);
        }}
      >Siguiente
      </button>
      <p>{indexCancion + 1} de {cancion.length}</p>
      <p>Titulo: {cancion[indexCancion].titulo}</p>
      <p>Informacion: {cancion[indexCancion].informacion}</p>
    </li>
  );
}
