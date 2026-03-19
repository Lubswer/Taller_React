import { cantantes } from "./cantantesData";
import { useState } from "react";

export default function BuscadorCantantes() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <div>
      <span>Buscar</span>
      <input
        placeholder="Nombre del cantante"
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <br />
      {busqueda.trim().length === 0 && <p>Resultado de Busqueda</p>}
      {busqueda.trim().length > 0 &&
      cantantes.filter((cantante) => cantante.nombre.toLowerCase().includes(busqueda.toLowerCase())).map((cantante) => <p key={cantante.nombre}>{cantante.nombre}</p>)
      }
    </div>
  );
}
