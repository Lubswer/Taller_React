

export default function ListCantantes (cantas){
    return(
        <p>
            {cantas.map((singer) => <p>{singer.nombre}</p>)}
        </p>

    );

}