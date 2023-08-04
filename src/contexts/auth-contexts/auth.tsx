import { useCallback, useState, ReactNode, useEffect } from "react";
import { createContext } from "use-context-selector";
import jwtDecode from "jwt-decode";

import { useStorage } from "../../shared/hooks/libs/use-storage";

import { setDefaultToken } from "../../shared/clients/axios";

type SignInResponse = {
  user: UserModal;
  token: string;
  countNewNotifications: number;
};

type AuthContextData = {
  token: string;
  user: UserModal;
  signIn(data: SignInResponse): Promise<void>;
  signOut(): Promise<void>;
  updateUser(user: UserModal): Promise<void>;
  isLoadingInitial: boolean;
  countNewNotifications: number;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type TokenDecoded = {
  exp: number;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const { saveStorage, KEY_TOKEN, KEY_USER, removeItem, getItem } =
    useStorage();

  const [token, setToken] = useState("");
  const [user, setUser] = useState<UserModal>({} as UserModal);
  const [countNewNotifications, setCountNewNotifications] = useState(0);

  const [isLoadingInitial, setIsLoadingInitial] = useState(true);

  useEffect(() => {
    init();
  }, []);

  const init = useCallback(async () => {
    const storageToken = await getItem(KEY_TOKEN);

    if (storageToken?.token) {
      const tokenDecoded = jwtDecode(storageToken.token) as TokenDecoded;

      if (tokenDecoded.exp * 1000 < Date.now()) {
        await signOut();
      } else {
        const storageUser = await getItem(KEY_USER);

        if (storageUser?.id) {
          setDefaultToken(storageToken.token);

          setUser(storageUser);
          setToken(storageToken.token);
        }
      }
    }

    setIsLoadingInitial(false);
  }, []);

  const signIn = useCallback(async (response: SignInResponse) => {
    await saveStorage({
      key: KEY_TOKEN,
      data: { token: response?.token },
    });

    await saveStorage({
      key: KEY_USER,
      data: response?.user,
    });

    setUser(response?.user);
    setCountNewNotifications(response?.countNewNotifications);
    setToken(response?.token);

    setDefaultToken(response?.token);
  }, []);

  const signOut = useCallback(async () => {
    await removeItem(KEY_USER);
    await removeItem(KEY_TOKEN);

    setToken("");
    setUser({} as UserModal);
  }, []);

  const updateUser = useCallback(async (userUpdated: UserModal) => {
    setUser((oldUser) => (!!userUpdated ? userUpdated : oldUser));

    if (userUpdated) {
      await saveStorage({
        key: KEY_USER,
        data: userUpdated,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        signIn,
        signOut,
        updateUser,
        isLoadingInitial,
        countNewNotifications,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
