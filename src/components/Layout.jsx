import Nav from "./Nav";
import PageTitle from "./PageTitle";

export default function Layout({children}) {
    return(
        <div id="styling">

            <Nav />
            <main>
                {children}
            </main>
            <footer>
                Ressursarkiv - arbeidskrav 2
            </footer>
        </div>
    )
}

/*Fått hjelp av medstudent Hanna Hënel Sørum til å sette opp funksjonen for layout på siden fra kodelinje 4-17. HTML-strukturen er 
gjort selv.*/