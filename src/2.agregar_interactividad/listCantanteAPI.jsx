
cantante = []

cantantesAPI = () => {
    fetch("https://api.deezer.com/user/2529")
        .then(response => response.json())  
        .then(data => {
            cantante.push(...data.data); 
        })      
    }
cantantesAPI();

export default function ListCantantesAPI (){
    return(
        <ul>
            {
                cantante.map(
                    (cantante) => <li key={cantante.id}>
                        <CardCantantes 
                        {...cantante}
                        /></li>
                )
            }

        </ul>

    );

}