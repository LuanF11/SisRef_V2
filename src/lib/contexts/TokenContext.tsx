import React from "react";
import { TokenType } from "../types/TokenType";

export const TokenContext = React.createContext<{
    token: TokenType | null;
    setToken: React.Dispatch<React.SetStateAction<TokenType | null>>;
}>({
    token: null,
    setToken: () => { }
})

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = React.useState<TokenType | null>(null);

    React.useEffect(() => {
        const token = localStorage.getItem('@rucedro-Token');
        const accessLevel = localStorage.getItem('@rucedro-acess-level-user');
        const idUser = localStorage.getItem('@rucedro-id-user');
        const activeUser = localStorage.getItem('@rucedro-active-user');
        const campusUser = localStorage.getItem('@rucedro-campus-user');
        const exp = localStorage.getItem('@rucedro-exp');
        const nameUser = localStorage.getItem('@rucedro-name-user');

        if (token && accessLevel && idUser && activeUser && campusUser && exp && nameUser) {
            setToken({
                access_token: token,
                classfication: accessLevel,
                id: Number(idUser),
                active: Number(activeUser),
                campus: Number(campusUser),
                expires_in: Number(exp),
                name: nameUser,
                token_type: "bearer"
            });
        }
    }, [])
    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    )
}