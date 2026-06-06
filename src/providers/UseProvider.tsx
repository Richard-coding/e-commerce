import { useState } from "react";
import type { ReactNode } from "react";
import { UserContext } from "@/context/UserContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { Register } from "../types/user";

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const {
    getUsers,
    saveUsers,
    getCurrentUser,
    saveCurrentUser,
    removeCurrentUser,
  } = useLocalStorage();

  const [users, setUsers] = useState<Register[]>(() => getUsers());

  const [currentUser, setCurrentUser] = useState<Register | null>(() =>
    getCurrentUser()
  );

  const registerUser = (user: Register): void => {
    const updatedUsers = [...users, user];

    setUsers(updatedUsers);
    saveUsers(updatedUsers);

    setCurrentUser(user);
    saveCurrentUser(user);
  };

  const loginUser = (email: string, password: string): boolean => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) return false;

    setCurrentUser(foundUser);
    saveCurrentUser(foundUser);

    return true;
  };

  const logoutUser = (): void => {
    setCurrentUser(null);
    removeCurrentUser();
  };

  return (
    <UserContext.Provider
      value={{
        users,
        currentUser,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}