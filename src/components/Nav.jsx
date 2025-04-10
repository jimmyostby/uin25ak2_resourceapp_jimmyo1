import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";

export default function Nav() {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="html">HTML</Link>
                    </li>
                    <li>
                        <Link to="css">CSS</Link>
                    </li>
                    <li>
                        <Link to="javascript">JAVASCRIPT</Link>
                    </li>
                    <li>
                        <Link to="react">REACT</Link>
                    </li>
                    <li>
                        <Link to="headless-cms">SANITY</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

/*
Lagd et komponent for navigasjonen på siden som linker til de ulike resurssene som skal bli vist. 
Medstudent Hanna Hënel Sørum har forklart hvordan link-funksjonen fungerer, har selv satt det opp 
etter en gjennomgang og forklaring fra henne.
*/