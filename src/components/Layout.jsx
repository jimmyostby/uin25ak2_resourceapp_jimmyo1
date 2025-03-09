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