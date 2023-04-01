import { ReactNode, useState, useContext, createContext } from "react";

export type AuthType = {
  token: string;
  lifetime: number;
  expires_at: string
};
type AuthContextType = {
  auth: null | AuthType;
  setAuth: (auth: AuthType | null) => void;
};

const AuthContext = createContext<AuthContextType>({ auth: null, setAuth: () => {} })

type Props = {
  children: ReactNode
}
const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<null | AuthType>(() => {
    const auth = JSON.parse(localStorage.getItem("auth") ?? "null")

    if (auth) {
      const expires_at = new Date(auth.expires_at)

      if (expires_at < new Date()) {
        localStorage.removeItem("auth")
        return null
      }
    }

    return auth
  })

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
