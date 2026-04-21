import { useState, useEffect } from "react"
const API_URL = import.meta.env.VITE_API_URL;
import AppCard from "../Components/AppCard";

export default function Homepage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/api/movies/index`)
        .then(res => res.json())
        .then(data => {
            setMovies(data)
        })

    }, []);


    return (
        <section>
            <div className="container">
                <h1 className="text-center my-4">Benvenuti su CineReview</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {movies.map(movie => (
                        <AppCard key={movie.id} 
                        movie={movie}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
