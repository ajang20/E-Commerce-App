import { useContext, createContext, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../users/userUsers";

export type AuthContextType = {
  currentUser: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

type ChildrenType = {
  children: ReactNode;
};

export default function UsersContextProvider({ children }: ChildrenType) {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") as string) || null,
  );

  function login(userData: User) {
    localStorage.setItem("user", JSON.stringify(userData));
    setCurrentUser(userData);
  }
  function logout() {
    localStorage.removeItem("user");
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
