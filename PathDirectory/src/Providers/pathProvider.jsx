import { createContext, useState } from "react";



export const PathContext = createContext();

export const PathProvider = ({ children }) => {
    const [formDataPath, setFormDataPath] = useState({
        name: "",
        descripitions: "",
        adjectives: ["1","2","3","4","5"],
    });

    const [formDataModulo, setFormDataModulo] = useState({
        name: "",
        descripitions: "",
      });
 return <PathContext.Provider value={{formDataPath,setFormDataPath,formDataModulo,setFormDataModulo}}>
            {children}
        </PathContext.Provider>
}