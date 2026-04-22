import { Link } from "react-router-dom";
import AppVoteStars from "./AppVoteStars.jsx";
// Movie detail elements: reusable block for the Movie page that
// displays title, vote, director, year, genre and plot summary.
export default function AppMovieCardElements({ movie }) {

    const { title, director, genre, release_year, abstract } = movie;

    return (

        <>
            <Link to="/" className="btn btn-outline-secondary align-self-end">Back to Movies</Link>

            <h2 className="h3 text-uppercase">{title}</h2>

            <AppVoteStars vote={movie?.average_vote} />

            <figcaption><strong>Director:</strong> {director}</figcaption>
            <small><strong>Release Year:</strong> {release_year}</small>
            <small><strong>Genre:</strong> {genre}</small>
            <p className=""><strong>Plot:</strong> {abstract}</p>
        </>
    )
}