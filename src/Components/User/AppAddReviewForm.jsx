// Review form component: simple UI to collect reviewer name, rating
import { GlobalContext } from "../../Context/GlobalContext"
import { useState, useContext } from "react"

// and review text. Submission behavior is not implemented here.
export default function AppAddReviewForm({ setAddReview, movie_id, handleHttpCall }) {

    const { api_url, setShowMessage, setMessage } = useContext(GlobalContext);

    const [formData, setFormData] = useState({
        name: '',
        vote: '',
        text: ''
    });

    function handleForm(e) {
        e.preventDefault();
        fetch(`${api_url}/api/movies/${movie_id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => {
                return res.json().then(data => {
                    if (!res.ok) {
                        throw data;
                    }
                    setMessage({type: 'success', message: data.message});
                    return data;
                })
            })
            .then(data => {
                handleHttpCall();
                setAddReview(false);
                setFormData({
                    name: '',
                    vote: '',
                    text: ''
                });
            })
            .catch(err => {
                setMessage({type: 'danger', message: err.error});
            })
        setShowMessage(true)
    }


    return (
        <div className="card card-body shadow">
            <h3 className="h4 mb-3">Add New Review</h3>
            <form action="" className="row" onSubmit={handleForm}>
                <div className="col col-12 col-md-6">
                    <label htmlFor="name" className="form-label">Reviewer Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Your name..." value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="col col-12 col-md-6">
                    <label htmlFor="vote" className="form-label">Rating</label>
                    <select name="vote" id="rating" className="mb-3 form-select" onChange={e => setFormData({ ...formData, vote: e.target.value })}>
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
                        onChange={e => setFormData({ ...formData, text: e.target.value })}></textarea>
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