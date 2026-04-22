import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

// Movie card used on the homepage
// Props: `movie` -> movie object with fields like title, director, image, etc.
export default function AppCard({ movie }) {

    const { title, director, genre, release_year, abstract, image } = movie;
    // Get base image URL from global context and append movie image path
    let { api_image } = useContext(GlobalContext);
    api_image += image;

    return (
        <figure className="col">
            <div className="card h-100 shadow">
                <Link to={`/movie/${movie.id}`} className="img-card overflow-hidden">
                    <img src={api_image} alt="" className="img-fluid w-100" />
                </Link>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h2 className="h2 text-center text-uppercase">{title}</h2>
                    <div className="text-center mb-2">
                        <figcaption>
                            <strong className="text-muted">Director: </strong> 
                            {director}</figcaption>
                        <small>
                            <strong className="text-muted">Release:</strong> {release_year} - 
                            <strong className="text-muted">Genre:</strong> {genre}</small>
                    </div>
                    <p className="lead">
                        <strong className="text-muted">Plot: </strong> 
                        {abstract}</p>
                    <Link to={`/movie/${movie.id}`} className="btn btn-outline-primary">Scopri di più</Link>
                </div>
            </div>
        </figure>
    )
}