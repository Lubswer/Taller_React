import CancionesCantantes from "./cancionesCantantes";
export default function CardCantantes (cantante){
    return(
        <div>
            {cantante.nombre}
            <ul>
                <CancionesCantantes cancion = {cantante.mejores_exitos} />
            </ul>
        </div>
    );
}