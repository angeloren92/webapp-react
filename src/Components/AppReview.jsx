export default function AppReview({ review }) {

    const { name, vote, text, created_at } = review;
    const date = new Date(created_at).toLocaleDateString();
    const time = new Date(created_at).toLocaleTimeString();

    return (
        <>
            <div className="col col-12">
                <div className="card">
                    <figure className="card-body mb-0">
                        <h5 className="card-title">{name}</h5>
                        <span>{vote}</span>
                        <p className="card-text">{text}</p>
                        <div className="text-end">
                            <small className="text-muted">Created at: {`${date} at ${time}`}</small>
                        </div>
                    </figure>
                </div>
            </div>
        </>
    )
}