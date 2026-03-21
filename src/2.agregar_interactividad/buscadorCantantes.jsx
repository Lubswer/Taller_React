import { cantantes } from "./cantantesData";
import { useState } from "react";

export default function BuscadorCantantes() {
  const [busqueda, setBusqueda] = useState("");

  function filtrarCantantes(paraBuscar) {
      if(paraBuscar.trim().length === 0){
        return"Resultados de Busqueda"
      }
      if(paraBuscar.trim().length > 0){
        return cantantes.filter((cantante) => cantante.nombre.toLowerCase().includes(paraBuscar.toLowerCase())).map((cantante) => cantante.nombre)
      }
      return []
  }
  async function arrayCantantes(paraBuscar) {
    let resultado = await filtrarCantantes(paraBuscar)

    if(resultado.length === 0) {
        resultado.push("No se encontraron resultados")
    }
    return resultado.forEach((cantante) => cantante);
  }

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
        {arrayCantantes(busqueda).map((cantante, index) => (
          <li key={index}>{cantante}</li>
        ))}
      </ul>

    </div>
  );
}
