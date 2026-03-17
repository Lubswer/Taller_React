import CardCantantes from "./cardCantantes";

export default function ListCantantes ({cantantes}){
    return(
        <ul>
            {
                cantantes.map(
                    (cantante) => <li key={cantante.id}>
                        <CardCantantes 
                        {...cantante}
                        /></li>
                )
            }

        </ul>

    );

}