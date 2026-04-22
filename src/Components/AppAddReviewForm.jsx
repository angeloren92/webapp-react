// Review form component: simple UI to collect reviewer name, rating
// and review text. Submission behavior is not implemented here.
export default function AppAddReviewForm( { addReview, setAddReview } ) {

    return (
        <div className="card card-body shadow">
            <h3 className="h4 mb-3">Add New Review</h3>
            <form action="" className="row">
                <div className="col col-12 col-md-6">
                    <label htmlFor="reviewer" className="form-label">Reviewer Name</label>
                    <input type="text" id="reviewer" className="form-control" placeholder="Your name..." />
                </div>
                <div className="col col-12 col-md-6">
                    <label htmlFor="rating" className="form-label">Rating</label>
                    <select name="rating" id="rating" className="mb-3 form-select">
                        <option value="">Select Rating</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>
                </div>
                <div className="col col-12 mb-3">
                    <label htmlFor="review" className="form-label">Review</label>
                    <textarea id="review" className="form-control" placeholder="Write your review here..." rows="4"></textarea>
                </div>
                <div className="d-flex justify-content-center gap-3">

                    <button type="submit" className="btn btn-primary">Submit Review</button>

                    <button type="button" className="btn btn-outline-secondary" 
                    onClick={() => setAddReview(false)}
                    >Cancel</button>
                </div>
            </form>
        </div>
    )
}