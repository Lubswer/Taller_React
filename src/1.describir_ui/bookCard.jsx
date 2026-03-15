export  function BookCard(props){
    return(
        <>
        <h3>{props.title} ⁕ {props.year}</h3>
        <p>{props.author}</p>
        <b>Genénero: </b>
        <ul>
        {
            props.genres.map((genero)=>
                <li key={genero}>{genero}</li>
            )
        }
        </ul>
        </>
    )
}