import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../Context/GlobalContext";
import AppReview from "../Components/AppReview.jsx";

export default function Movie() {

    const [movie, setMovie] = useState(null);
    const id = parseInt(useParams().id);
    const { api_url, api_image } = useContext(GlobalContext);

    useEffect(() => {
        fetch(`${api_url}/api/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
            })

    }, []);

    return (
        <div className="container my-5">
            <div className="card">
                <div className="card-body">
                    <div className="row g-4">
                        <div className="col col-12 col-md-5">
                            <img src={api_image + movie?.image} alt="" className="img-fluid" />
                        </div>
                        <div className="col col-12 col-md-7">
                            <h2 className="h3">{movie?.title}</h2>
                            <figcaption>{movie?.director}</figcaption>
                            <small>{movie?.release_year} - {movie?.genre}</small>
                            <p className="lead">{movie?.abstract}</p>
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