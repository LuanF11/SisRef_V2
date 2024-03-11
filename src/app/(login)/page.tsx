"use client"

import { useState, useContext, ChangeEvent, FormEvent } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { TokenType } from '@/lib/types/TokenType';
import { TokenContext } from '@/lib/contexts/TokenContext';
import StudentPage from '../estudante/page';
import { MenuProvider } from '@/lib/contexts/MenuContext';
import { FoodRestrictionProvider } from '@/lib/contexts/FoodRestrictionContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const tokenContext = useContext(TokenContext);

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch("https://ruapi.cedro.ifce.edu.br/api/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data: TokenType = await response.json();

            if (data.access_token) {
                tokenContext.setToken(data);
                localStorage.setItem('@rucedro-Token', data.access_token);
                localStorage.setItem('@rucedro-acess-level-user', data.classfication);
                localStorage.setItem('@rucedro-id-user', String(data.id));
                localStorage.setItem('@rucedro-active-user', String(data.active));
                localStorage.setItem('@rucedro-campus-user', String(data.campus));
                localStorage.setItem('@rucedro-exp', String(data.expires_in));
                localStorage.setItem('@rucedro-name-user', data.name);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (tokenContext.token) return (
        <MenuProvider>
            <FoodRestrictionProvider>
                <StudentPage />
            </FoodRestrictionProvider>
        </MenuProvider>
    )

    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Entrar
                </Button>
            </form>
        </Container>
    );
}

export default LoginPage;