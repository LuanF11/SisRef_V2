import LoginPage from "@/app/(login)/page";
import StudentPage from "@/app/estudante/page";
import { TokenContext } from "@/lib/contexts/TokenContext";
import React from "react";

export const PageRouter = () => {
    const tokenContext = React.useContext(TokenContext);

    if (!tokenContext.token) return <LoginPage />;

    if (tokenContext.token.classfication === "STUDENT") return <StudentPage />;
}