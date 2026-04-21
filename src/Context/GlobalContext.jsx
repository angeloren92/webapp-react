import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
const api_image = import.meta.env.VITE_API_IMAGE_URL;
const api_url = import.meta.env.VITE_API_URL;

    return (
        <GlobalContext.Provider 
        value={{ api_image, api_url }}>
            {children}
        </GlobalContext.Provider>
    )
}