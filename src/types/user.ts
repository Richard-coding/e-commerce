export interface Register {
  name: string;
  email: string;
  password: string;
}

export interface UserContextType {
  users: Register[];
  currentUser: Register | null;
  registerUser: (user: Register) => void;
  loginUser: (email: string, password: string) => boolean;
  logoutUser: () => void;
}
