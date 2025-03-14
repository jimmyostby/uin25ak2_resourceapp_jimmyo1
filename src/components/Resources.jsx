import { Link } from "react-router-dom"
import resources from "../assets/resources.js"
import PageTitle from "./PageTitle.jsx"
export default function Resources ({category}) {

    const filtered = resources.filter(resource => resource.category === category)
    console.log(filtered)
    return(
        <>
        
            <PageTitle sideTittel={filtered [0].category} />
            {filtered.map((filteritem) => 
    <article key={filteritem.title}>
        <h3 id="overskrift">{filteritem.title}</h3>
        <ul>
            <li>
                <Link to={filteritem.url}>Les mer</Link>
            </li>
        </ul>
    </article>
    
        )}
        </>
    )
}

/*
Har fått hjelp av medstudent Hanna Hënel Sørum til å lage en filterfunksjon
som filtrerer ut informasjonen fra resources.js og legger disse i et eget objekt.
Har også fått hjelp til å ta i bruk .map funksjonen som mapper igjennom informasjon fra resources.js. 
*/