import ListCantantes from "./listCantantes.jsx"
import {cantantes} from "./cantantesData.js"
export default function GridCantantes (){
    let can = cantantes
    let cantas = [...can]
    return (
        <div>
            <ListCantantes cantantesList = {cantas}/>
        </div>

    );
}