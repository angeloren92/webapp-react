import { createContext } from "react";

// Global context to share API base urls across the app
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // Read values from Vite environment variables
    const api_url = import.meta.env.VITE_API_URL;
    const api_image = import.meta.env.VITE_API_IMAGE_URL;

    return (
        <GlobalContext.Provider
            value={{ api_image, api_url }}>
            {children}
        </GlobalContext.Provider>
    )
}
