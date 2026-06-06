import type { Register } from "../types/user";

export function useLocalStorage() {
  const getUsers = (): Register[] => {
    const users = localStorage.getItem("users");

    if (!users) return [];

    return JSON.parse(users);
  };

  const saveUsers = (users: Register[]): void => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const getCurrentUser = (): Register | null => {
    const user = localStorage.getItem("currentUser");

    if (!user) return null;

    return JSON.parse(user);
  };

  const saveCurrentUser = (user: Register): void => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const removeCurrentUser = (): void => {
    localStorage.removeItem("currentUser");
  };

  return {
    getUsers,
    saveUsers,
    getCurrentUser,
    saveCurrentUser,
    removeCurrentUser,
  };
}