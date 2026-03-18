import { cantantes } from "./cantantesData";
import {useState} from "react";

export default function BuscadorCantantes (){
    const [busqueda, setBusqueda] = useState("");
    const [resultadoBusqueda, setResultadoBusqueda] = useState(false);

    function buscarCantante(){

        const resultadoBusqueda = cantantes.map(
            (cantante) => {
                if(cantante.nombre.toLowerCase().includes(busqueda.toLowerCase())){
                    setResultadoBusqueda(!resultadoBusqueda);
                    console.log(busqueda);
                    return cantante;
                }
            }
        )
    return resultadoBusqueda;

    }

    return(
        <div>
        <span>Buscar</span>
        <input type="text" value = {busqueda}
         onChange={(e) => setBusqueda(e.target.value)}
         />
         {console.log(busqueda)}
         <button onClick={() => {buscarCantante()}}>Buscar</button>
         <button onClick={() => {setBusqueda("");
            setResultadoBusqueda(false);
         }}>Limpiar</button>
         {resultadoBusqueda ? <p>El cantante existe</p> : <p> sin resultados </p>}
        

        </div>

    )
}