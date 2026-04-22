export default function AppVoteStars({ vote }) {

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
        <span>VOTE: {stars}</span>
    )
}