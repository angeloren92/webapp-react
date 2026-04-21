import { useState, useEffect, useContext } from "react"
import AppCard from "../Components/AppCard";
import { GlobalContext } from "../Context/GlobalContext";


export default function Homepage() {
    
    const { api_url } = useContext(GlobalContext);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${api_url}/api/movies/index`)
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
