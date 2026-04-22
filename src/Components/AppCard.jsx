import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

// Movie card used on the homepage
// Props: `movie` -> movie object with fields like title, director, image, etc.
export default function AppCard({ movie }) {

    const { title, director, genre, release_year, abstract, image } = movie;
    const [modal, setmodal] = useState(false);
    // Get base image URL from global context and append movie image path
    let { api_image } = useContext(GlobalContext);
    api_image += image;

    return (
        <>
            <figure className="col">
                <div className="card card-hover h-100">
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h2 className="h2 text-center text-uppercase">{title}</h2>
                    </div>
                    <div onClick={() => setmodal(true)} className="img-card overflow-hidden">
                        <img src={api_image} alt="" className="img-fluid w-100" />
                    </div>
                </div>
            </figure>
            {modal && (
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
            )}
        </>
    )
}