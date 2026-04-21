// Simple component to display a single review
// Props: `review` -> object with { name, vote, text, created_at }
export default function AppReview({ review }) {

    // Destructure commonly used fields from the review
    const { name, vote, text, created_at } = review;
    // Format date and time for readable display
    const date = new Date(created_at).toLocaleDateString();
    const time = new Date(created_at).toLocaleTimeString();

    // Prepare array of star icons (filled and empty)
    const stars = [];

    // Filled stars based on the vote
    for (let i = 0; i < vote; i++) {
        stars.push(<i key={`filled-${i}`} className="bi bi-star-fill text-warning"></i>);
    }
    // Empty stars up to 5
    for (let i = vote; i < 5; i++) {
        stars.push(<i key={`empty-${i}`} className="bi bi-star-fill text-secondary"></i>);
    }

    return (
        <>
            <div className="col col-12">
                <div className="card">
                    <figure className="card-body mb-0">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{text}</p>
                        <span>VOTE: {stars}</span>
                        <div className="text-end">
                            <small className="text-muted">Created at: {`${date} at ${time}`}</small>
                        </div>
                    </figure>
                </div>
            </div>
        </>
    )
}