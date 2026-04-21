export default function AppReview({ review }) {

    return (
        <>
        <div className="col col-12">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{review.name}</h5>
                    <p className="card-text">{review.text}</p>
                </div>
            </div>
        </div>
        </>
    )
}