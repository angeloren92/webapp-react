
import { GlobalContext } from "../Context/GlobalContext.jsx";
import { useContext, useEffect } from "react";
export default function AppMessage() {

    const { message, setShowMessage, setMessage, showMessage } = useContext(GlobalContext);

    useEffect(() => {

        if (!showMessage) return;

        const timer = setTimeout(() => {
            setMessage({
                type: '',
                message: ''
            });
            setShowMessage(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [showMessage, setMessage, setShowMessage]);

    return (
        <>
            {
                showMessage && <div className={`alert alert-${message.type} position-fixed bottom-0 start-50 translate-middle z-3 w-75`} role="alert">{message.message}</div>
            }
        </>
    )
}