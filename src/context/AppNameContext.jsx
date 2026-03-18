

import { createContext } from "react";

//step 1: create a context
export const AppNameContext = createContext();

//step 2: create a provider: a provider is a super component that can provide any component that are its children with whatever he has
export const AppNameProvider = ({children}) => {

    const appName = "Invento Application";
    return (<AppNameContext.Provider value={{appName:appName}}>
                {children}
           </AppNameContext.Provider>)

}

//stage 3: wrap it children with AppNameProvider