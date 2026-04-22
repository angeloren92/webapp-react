export default function AppAddReviewForm() {
    
    return (
        <div className="card card-body shadow">
            <h3 className="h4 mb-3">Add New Review</h3>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="reviewer" className="form-label">Reviewer Name</label>
                    <input type="text" id="reviewer" className="form-control" placeholder="Your name..." />
                </div>
                <div className="mb-3">
                    <label htmlFor="review" className="form-label">Review</label>
                    <textarea id="review" className="form-control" placeholder="Write your review here..." rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Review</button>
            </form>
        </div>
    )
}