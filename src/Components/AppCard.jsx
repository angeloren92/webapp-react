import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

export default function AppCard({ movie }) {

    const { title, director, genre, release_year, abstract, image } = movie;
    let { api_image } = useContext(GlobalContext);
    api_image += image;

    return (
        <figure className="col">
            <div className="card h-100 shadow">
                <div className="img-card overflow-hidden">
                    <img src={api_image} alt="" className="img-fluid" />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h2 className="h3">{title}</h2>
                    <div className="mb-2">
                        <figcaption>Director: {director}</figcaption>
                        <small>Release: {release_year} - Genre: {genre}</small>
                    </div>
                    <p className="lead">{abstract}</p>
                    <Link to={`/movie/${movie.id}`} className="btn btn-outline-primary">Scopri di più</Link>
                </div>
            </div>
        </figure>
    )
}