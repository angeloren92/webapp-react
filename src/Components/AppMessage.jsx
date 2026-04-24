
import { GlobalContext } from "../Context/GlobalContext.jsx";
import { useContext } from "react";
export default function AppMessage() {

        const { message } = useContext(GlobalContext);
    
    return (
        <div className="alert alert-success position-fixed bottom-0 start-50 translate-middle z-3 w-75" role="alert">{message}</div>
    )
}