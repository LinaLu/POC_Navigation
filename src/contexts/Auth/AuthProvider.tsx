import AsyncStorage from "@react-native-community/async-storage";
import React, { useState } from "react";

type User = null | {
  username: string;
};

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<null | User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const testUser = { username: "ben" };
          setUser(testUser);
          AsyncStorage.setItem("user", JSON.stringify(testUser));
          //TODO: Handle if promise return an error
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem("user");
          //TODO: Handle if promise return an error
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
