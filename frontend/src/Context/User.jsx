import { createContext, useContext, useEffect, useState } from "react";
import { isLoggedIn } from "../Services/backend";

export const UserContext = createContext();

UserContext.displayName = "UserContext";

export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const response = await isLoggedIn();
      if (!response || response instanceof Error || !response.isLoggedIn)
        return;
      setUser(response.user);
    };
    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
