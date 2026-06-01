interface Register {
  name: string;
  email: string;
  password: string;
}

const useLocalStorage = () => {
  const getUser = (): Register | null => {
    const user = localStorage.getItem("user");

    if (!user) return null;

    console.log(user);

    return JSON.parse(user);
  };

  const createUser = (user: Register): void => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const deleteUser = (user: string): void => {
    localStorage.removeItem(user);
  };

  return {
    getUser,
    createUser,
    deleteUser,
  };
};

export default useLocalStorage;
