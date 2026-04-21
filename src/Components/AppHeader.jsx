import { Link } from "react-router-dom";

export default function AppHeader() {

    return (
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link className="navbar-brand" to="/">HomePage</Link>
                </div>
            </nav>
        </header>
    )
}
