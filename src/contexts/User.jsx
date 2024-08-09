import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [anonymousUser, setAnonymousUser] = useState({email: "sat.softies_0m@icloud.com", name: "Anonymous User"})

  return (
    <UserContext.Provider value={{anonymousUser, setAnonymousUser}}>
        {children}
    </UserContext.Provider>
  )
}