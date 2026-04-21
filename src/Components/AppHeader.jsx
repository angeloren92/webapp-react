import { Link } from "react-router-dom";

export default function AppHeader() {

    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">HomePage</Link>
                </div>
            </nav>
        </header>
    )
}
