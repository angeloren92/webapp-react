import { useState, useEffect, useContext } from "react"
import AppMovieCard from "../Components/User/AppMovieCard";
import { GlobalContext } from "../Context/GlobalContext";
import AppLoader from "../Components/AppLoader";

// Homepage: fetches movie list from API and shows a grid of `AppCard`
export default function Homepage() {

    const { api_url } = useContext(GlobalContext);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch the movies from the API and store in state
        fetch(`${api_url}/api/movies/index`)
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })

    }, []);


    return (
        <>
            <AppLoader />

            <section className="home-page bg-body-secondary py-3 py-md-5">
                <div className="container">
                    <h1 className="text-center pb-3 pb-md-5">Benvenuti su CineReview</h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {movies.map(movie => (
                            <AppMovieCard key={movie.id}
                                movie={movie}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
