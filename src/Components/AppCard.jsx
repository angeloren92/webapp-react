export default function AppCard({movie}) {

    const { title, director, genre, release_year, abstract, image, created_at, updated_at } = movie;

    const api_image = import.meta.env.VITE_API_IMAGE_URL + image;

    return (
        <figure className="col d-flex flex-column align-items-start justify-content-center">
            <div className="card">
                <img src={api_image} alt="" className="img-fluid" />
                <div className="card-body">
                    <h2 className="h3">{title}</h2>
                    <figcaption>{director}</figcaption>
                    <small>{release_year} - {genre}</small>
                    <p className="lead">{abstract}</p>
                    <a href="#" className="btn btn-primary">Scopri di più</a>
                </div>
            </div>
        </figure>
    )
}