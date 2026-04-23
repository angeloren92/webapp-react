import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../Context/GlobalContext.jsx";
import AppReview from "../Components/User/AppReview.jsx";
import AppAddReviewForm from "../Components/User/AppAddReviewForm.jsx";
import AppMovieCardElements from "../Components/User/AppMovieCardelements.jsx";

// Movie page: fetches a single movie by id and shows details + reviews
export default function Movie() {

    const [movie, setMovie] = useState(null);
    const id = parseInt(useParams().id);
    const { api_url, api_image } = useContext(GlobalContext);
    const [addReview, setAddReview] = useState(false);

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
                            <AppMovieCardElements movie={movie} api_image={api_image + movie?.image} />
                        </div>

                        <div className="col-12">
                            <button onClick={() => setAddReview(true)} className="btn btn-warning">Add New Review</button>
                        </div>

                        {
                            addReview &&
                            <div className="col col-12">
                                <AppAddReviewForm 
                                addReview={addReview}
                                setAddReview={setAddReview}
                                movie_id={movie?.id}
                                />
                            </div>
                        }

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