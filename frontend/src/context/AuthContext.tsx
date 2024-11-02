import React, {
  createContext,
  useContext,
  useMemo,
  ReactNode,
  useEffect,
  useCallback,
} from "react";

import { useLocalStorage } from "hooks";
import { useUserAuthMutation } from "store";

interface IUser {
  token: string;
}

interface AuthContextType {
  user: IUser | null;
  isLoading: boolean;
  login: (user: IUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useLocalStorage<IUser | null>("user", null);
  const [authUser, { data: authUserData, error, isLoading }] =
    useUserAuthMutation();

  useEffect(() => {
    //авторизация
  }, [authUser]);

  useEffect(() => {
    //если ошибка - разлогин
  }, [error]);

  useEffect(() => {
    if (!authUserData) return;
    //устанавливаем юзера
  }, [authUserData]);

  const login = useCallback(
    (user: IUser) => {
      setUser(user);
    },
    [setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isLoading,
    }),
    [user, login, logout, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
