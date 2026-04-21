import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../Context/GlobalContext";

export default function Movie() {

    const id = parseInt(useParams().id);
    const { api_url } = useContext(GlobalContext);

    useEffect(() => {
        fetch(`${api_url}/api/movies/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }, []);

    return (
        <>
        ciaooo {id}
        </>
    )
}