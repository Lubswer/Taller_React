import {BookCard} from "./bookCard.jsx"
import { books } from "./data.js"
export  function BookGrid(){
    return(

        <div>
            <ul>
                {
                    books.map(
                        (libro) => 
                        <li key = {libro.id} ><BookCard {...libro}/></li>
                    )
                }

            </ul>
        </div>


    )
}