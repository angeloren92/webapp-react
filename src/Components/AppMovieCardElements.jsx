import { useContext } from "react"
import { Link } from "react-router-dom"
import AppVoteStars from "./AppVoteStars"

export default function AppMovieCardElements({ movie }) {

    return (

        <>
            <Link to="/" className="btn btn-outline-secondary align-self-end">Back to Movies</Link>

            <h2 className="h3 text-uppercase">{movie?.title}</h2>

            <AppVoteStars vote={movie?.average_vote} />

            <figcaption><strong>Director:</strong> {movie?.director}</figcaption>
            <small><strong>Release Year:</strong> {movie?.release_year}</small>
            <small><strong>Genre:</strong> {movie?.genre}</small>
            <p className=""><strong>Plot:</strong> {movie?.abstract}</p>
        </>
    )
}