import { cantantes } from "./cantantesData";
import { useState } from "react";

export default function BuscadorCantantes() {
  const [busqueda, setBusqueda] = useState("");

  const resultados = cantantes.filter((cantante) =>
    cantante.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <span>Buscar</span>
      <input
        placeholder="Nombre del cantante"
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ul>
        
        {busqueda.trim().length === 0 ? (
          <li>Ingresa un nombre para buscar</li>
        ) : resultados.length > 0 ? (
          resultados.map((cantante) => (
            <li key={cantante.id}>{cantante.nombre}</li>
          ))
        ) : (
          <li>No se encontraron resultados</li>
        )}
      </ul>
    </div>
  );
}
