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