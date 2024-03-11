import React from "react";
import { TokenType } from "../types/TokenType";

const defaultContextValue = {
  token: null as TokenType | null,
  setToken: (token: TokenType | null) => {}
};

export const TokenContext = React.createContext(defaultContextValue);

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = React.useState<TokenType | null>(null);

  React.useEffect(() => {
    const storedToken = localStorage.getItem('@rucedro-Token');
    const storedValues = ['@rucedro-acess-level-user', '@rucedro-id-user', '@rucedro-active-user', '@rucedro-campus-user', '@rucedro-exp', '@rucedro-name-user']
      .map(item => localStorage.getItem(item));

    if (storedToken && storedValues.every(item => item !== null)) {
      setToken({
        access_token: storedToken,
        classfication: storedValues[0]!,
        id: Number(storedValues[1]),
        active: Number(storedValues[2]),
        campus: Number(storedValues[3]),
        expires_in: Number(storedValues[4]),
        name: storedValues[5]!,
        token_type: "bearer"
      });
    } else {
      setToken(null);
    }
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}