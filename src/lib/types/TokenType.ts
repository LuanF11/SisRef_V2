interface TokenType {
    access_token: string;
    token_type: string;
    id: number;
    classfication: "STUDENT";
    name: string;
    campus: number;
    active: number;
    expires_in: number;
}

export type { TokenType }