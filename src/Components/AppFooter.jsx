export default function AppFooter() {

    return (
        <footer className="container">
            <div className="d-flex flex-column align-items-center justify-content-center py-4">
                <div className="footer-logo">
                    <h2>Cine<span>Review</span></h2>
                </div>
                <div className="footer-copyright">
                    <p>© {new Date().getFullYear()} CineReview. Tutti i film, nessuna pausa.</p>
                </div>
            </div>
        </footer>
    )
}
