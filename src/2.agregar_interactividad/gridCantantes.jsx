import ListCantantes from "./listCantantes.jsx"
import {cantantes} from "./cantantesData.js"
export default function GridCantantes (){
    return (
        <div>
            <ListCantantes cantantes = {cantantes}/>
        </div>
    
    );
}