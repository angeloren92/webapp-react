import AppVoteStars from "./AppVoteStars";

// Simple component to display a single review
// Props: `review` -> object with { name, vote, text, created_at }
export default function AppReview({ review }) {

    // Destructure commonly used fields from the review
    const { name, vote, text, created_at } = review;
    // Format date and time for readable display
    const date = new Date(created_at).toLocaleDateString();
    const time = new Date(created_at).toLocaleTimeString();

    return (
        <>
            <div className="col col-12">
                <div className="card">
                    <figure className="card-body mb-0">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{text}</p>
                        <AppVoteStars vote={vote} />
                        <div className="text-end">
                            <small className="text-muted">Created at: {`${date} at ${time}`}</small>
                        </div>
                    </figure>
                </div>
            </div>
        </>
    )
}