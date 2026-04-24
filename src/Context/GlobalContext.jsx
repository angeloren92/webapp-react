import { createContext } from "react";
import { useState } from "react"

// Global context to share API base urls across the app
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // Read values from Vite environment variables
    const api_url = import.meta.env.VITE_API_URL;
    const api_image = import.meta.env.VITE_API_IMAGE_URL;

    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false)

    return (
        <GlobalContext.Provider
            value={{ 
                api_image, 
                api_url,
                message,
                setMessage,
                showMessage,
                setShowMessage
                }}>
            {children}
        </GlobalContext.Provider>
    )
}
