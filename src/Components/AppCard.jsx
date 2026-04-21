import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

export default function AppCard({movie}) {
    
    const { title, director, genre, release_year, abstract, image } = movie;
    let { api_image } = useContext(GlobalContext);
    api_image += image;

    return (
        <figure className="col d-flex flex-column align-items-start justify-content-center">
            <div className="card">
                <img src={api_image} alt="" className="img-fluid" />
                <div className="card-body">
                    <h2 className="h3">{title}</h2>
                    <figcaption>{director}</figcaption>
                    <small>{release_year} - {genre}</small>
                    <p className="lead">{abstract}</p>
                    <Link to={`/movie/${movie.id}`} className="btn btn-primary">Scopri di più</Link>
                </div>
            </div>
        </figure>
    )
}