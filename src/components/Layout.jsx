import Nav from "./Nav";

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