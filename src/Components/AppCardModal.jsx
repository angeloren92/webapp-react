// Modal used by `AppCard`: shows expanded movie details and actions
// (links to the movie detail page or closing the modal).
import { Link } from "react-router-dom";

export default function AppcardModal({ movie, modal, setmodal }) {

    const { title, director, genre, release_year, abstract } = movie;
    
    return (
        <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title text-uppercase">{title}</h3>
                        <button type="button" className="btn-close" onClick={() => setmodal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <p><strong>Director:</strong> {director}</p>
                        <p><strong>Release:</strong> {release_year}</p>
                        <p><strong>Genre:</strong> {genre}</p>
                        <p><strong>Plot:</strong> {abstract}</p>
                        <div className="d-flex justify-content-center gap-3">
                            <Link to={`/movie/${movie.id}`} className="btn btn-primary w-25">More...</Link>
                            <button type="button" className="btn btn-outline-secondary w-25" onClick={() => setmodal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}