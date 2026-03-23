import { useState } from "react";
export default function CancionesCantantes({ cancion }) {
  const [indexCancion, setIndexCancion] = useState(0);
  let antes = indexCancion > 0;
  let despues = indexCancion < cancion.length - 1;
  function handlePrevClick() {
    if (antes) {
      setIndexCancion(indexCancion - 1);
    }
  }

  function handleNextClick() {
    if (despues) {
      setIndexCancion(indexCancion + 1);
    }
  }
  return (
    <li>
      <button onClick={handlePrevClick} disabled={!antes}>
        Anterior
      </button>
      <button onClick={handleNextClick} disabled={!despues}>
        Siguiente
      </button>

      <p>
        {indexCancion + 1} de {cancion.length}
      </p>

      <p>Titulo: {cancion[indexCancion].titulo}</p>
      <p>Informacion: {cancion[indexCancion].informacion}</p>
    </li>
  );
}
