import { useState, useEffect } from "react"
const API_URL = import.meta.env.VITE_API_URL;

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
                <div className="row">
                    <figure className="col d-flex flex-column align-items-start justify-content-center">
                        <div className="card">
                            <img src="https://placehold.co/400x600/png" alt="" className="img-fluid" />
                            <div className="card-body">
                                <h2 className="h3">Benvenuti su CineReview</h2>
                                <p className="lead">Il tuo punto di riferimento per recensioni e consigli sui film.</p>
                                <a href="#" className="btn btn-primary">Scopri di più</a>
                            </div>
                        </div>
                    </figure>
                    <figure className="col d-flex flex-column align-items-start justify-content-center">
                        <div className="card">
                            <img src="https://placehold.co/400x600/png" alt="" className="img-fluid" />
                            <div className="card-body">
                                <h2 className="h3">Benvenuti su CineReview</h2>
                                <p className="lead">Il tuo punto di riferimento per recensioni e consigli sui film.</p>
                                <a href="#" className="btn btn-primary">Scopri di più</a>
                            </div>
                        </div>
                    </figure>
                    <figure className="col d-flex flex-column align-items-start justify-content-center">
                        <div className="card">
                            <img src="https://placehold.co/400x600/png" alt="" className="img-fluid" />
                            <div className="card-body">
                                <h2 className="h3">Benvenuti su CineReview</h2>
                                <p className="lead">Il tuo punto di riferimento per recensioni e consigli sui film.</p>
                                <a href="#" className="btn btn-primary">Scopri di più</a>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    )
}
