import { useEffect, useState, useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"

export default function AdminPage() {

    const { api_url } = useContext(GlobalContext);
    const [btnAllMovies, setBtnAllMovies] = useState(false);
    const [movies, setMovies] = useState([]);

    function handleAllMovies() {
        fetch(`${api_url}/api/movies/index`)
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
    }

    return (
        <main>
            <div className="container">
                <div className="row p-2 gap-2">
                    <div className="col col-3 border py-3">
                        <ul className="list-unstyled">
                            <li className="">
                                <button type="button" className="btn rounded-0"
                                    onClick={handleAllMovies}>Get All Movies</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col border py-3">
                        <h2>Movie List</h2>
                        <ul className="list-group list-group-flush">
                            {movies.map(movie => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={movie.id}>
                                    <span>
                                        {movie.id}
                                        - <strong className="text-uppercase"> {movie.title} </strong>
                                        - {movie.director}
                                        - {movie.release_year}
                                        - {movie.genre}
                                    </span>
                                    <span className="d-flex gap-3">
                                        <button type="button" className="btn"><i class="bi bi-binoculars"></i></button>
                                        <button type="button" className="btn"><i class="bi bi-pen"></i></button>
                                        <button type="button" className="btn"><i class="bi bi-trash3"></i></button>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}