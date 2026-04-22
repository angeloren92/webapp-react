import { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import AppcardModal from "./AppCardModal";

// Movie card used on the homepage
// Props: `movie` -> movie object with fields like title, director, image, etc.
export default function AppCard({ movie }) {

    const { title, director, genre, release_year, abstract, image } = movie;
    const [modal, setmodal] = useState(false);
    // Get base image URL from global context and append movie image path
    let { api_image } = useContext(GlobalContext);
    api_image += image;

    return (
        <>
            <figure className="col">
                <div className="card card-hover h-100">
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h2 className="h2 text-center text-uppercase">{title}</h2>
                    </div>
                    <div onClick={() => setmodal(true)} className="img-card overflow-hidden">
                        <img src={api_image} alt="" className="img-fluid w-100" />
                    </div>
                </div>
            </figure>
            {modal && (
                <AppcardModal
                    movie={movie}
                    modal={modal}
                    setmodal={setmodal}
                />

            )}
        </>
    )
}