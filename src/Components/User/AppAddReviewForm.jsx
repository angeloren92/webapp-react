// Review form component: simple UI to collect reviewer name, rating

import { useState } from "react"

// and review text. Submission behavior is not implemented here.
export default function AppAddReviewForm( { addReview, setAddReview, movie_id } ) {

    const [ formData, setFormData ] = useState({
        movie_id: movie_id,
        name: '',
        vote: '',
        text: ''
    });

    function handleForm(e) {
        e.preventDefault();
        console.log(formData)
    }
 

    return (
        <div className="card card-body shadow">
            <h3 className="h4 mb-3">Add New Review</h3>
            <form action="" className="row" onSubmit={handleForm}>
                <div className="col col-12 col-md-6">
                    <label htmlFor="name" className="form-label">Reviewer Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Your name..." value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required/>
                </div>
                <div className="col col-12 col-md-6">
                    <label htmlFor="vote" className="form-label">Rating</label>
                    <select name="vote" id="rating" className="mb-3 form-select" onChange={e => setFormData({ ...formData, vote: e.target.value })} required>
                        <option value="" hidden>Select Rating</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>
                </div>
                <div className="col col-12 mb-3">
                    <label htmlFor="review" className="form-label">Review</label>
                    <textarea id="review" className="form-control" placeholder="Write your review here..." rows="4" value={formData.text}
                    onChange={e => setFormData({ ...formData, text: e.target.value })} required></textarea>
                </div>
                <div className="d-flex justify-content-center gap-3">

                    <button type="submit" className="btn btn-primary"
                    onSubmit={handleForm}
                    >Submit Review</button>

                    <button type="button" className="btn btn-outline-secondary" 
                    onClick={() => setAddReview(false)}
                    >Cancel</button>
                </div>
            </form>
        </div>
    )
}