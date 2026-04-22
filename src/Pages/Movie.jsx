import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom"
import { GlobalContext } from "../Context/GlobalContext";
import AppReview from "../Components/AppReview.jsx";

// Movie page: fetches a single movie by id and shows details + reviews
export default function Movie() {

    const [movie, setMovie] = useState(null);
    const id = parseInt(useParams().id);
    const { api_url, api_image } = useContext(GlobalContext);

    useEffect(() => {
        // Fetch movie details when component mounts (or id changes)
        fetch(`${api_url}/api/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
            })

    }, [id, api_url]);

    return (
        <div className="container my-5">
            <div className="card">
                <div className="card-body shadow">
                    <div className="row g-4">
                        <div className="col col-12 col-md-5 d-flex align-items-center justify-content-center">
                            <img src={api_image + movie?.image} alt="" className="img-fluid" />
                        </div>
                        <div className="col col-12 col-md-7 d-flex flex-column gap-3">
                            <Link to="/" className="btn btn-outline-secondary align-self-end">Back to Movies</Link>
                            <h2 className="h3 text-uppercase">{movie?.title}</h2>
                            <span>{movie?.average_vote}</span>
                            <figcaption><strong>Director:</strong> {movie?.director}</figcaption>
                            <small><strong>Release Year:</strong> {movie?.release_year}</small>
                            <small><strong>Genre:</strong> {movie?.genre}</small>
                            <p className=""><strong>Plot:</strong> {movie?.abstract}</p>
                        </div>
                        {
                            movie?.reviews?.map(review => (
                                <AppReview key={review?.id} review={review} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}