import { createContext, useState } from "react";



export const PathContext = createContext();

export const PathProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: "",
        descripitions: "",
        adjectives: ["1","2","3","4","5"],
    });
 return <PathContext.Provider value={{setFormData,formData}}>
            {children}
        </PathContext.Provider>
}