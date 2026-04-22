import { Link } from "react-router-dom";

// Application header: simple navbar with a link to the homepage
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
