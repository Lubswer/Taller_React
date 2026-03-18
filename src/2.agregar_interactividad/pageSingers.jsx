import GridCantantes from "./gridCantantes.jsx"
import BuscadorCantantes from "./buscadorCantantes.jsx"
export default function PageSingers (){
    return(
        <div className="pageSingers">
            <h1>Cantantes Ecuatorianos</h1>
            <BuscadorCantantes/>
            <GridCantantes/>
        </div>
    );
}