export default function AppVoteStars({ vote }) {

    const numericVote = parseFloat(vote).toFixed(2) || 0;

    const percentage = (numericVote / 5) * 100;

    return (
        <div className="d-inline-flex align-items-center">
            <span className="fw-bold">VOTE: </span>
            <span 
                className="mx-2 rating" 
                style={{ '--percent': `${percentage}%` }}
                title={`${numericVote} / 5`}
            >
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
            </span>
            <span className="small text-muted">{numericVote}</span>
        </div>
    );
}