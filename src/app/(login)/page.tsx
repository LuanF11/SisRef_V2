"use client"

import { useState, useContext, ChangeEvent, FormEvent } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { TokenType } from '@/lib/types/TokenType';
import { TokenContext } from '@/lib/contexts/TokenContext';
import StudentPage from '../estudante/page';
import { MenuProvider } from '@/lib/contexts/MenuContext';
import { FoodRestrictionProvider } from '@/lib/contexts/FoodRestrictionContext';
import styles from './page.module.css';
import Image from 'next/image';
import sisrefLogo from '@/../public/assets/img/sisrefLogo.png';
import Head from 'next/head';

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
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="./assets/img/sisrefIcon.png" />
            </Head>
            <div className={styles.container}>
                <Image src={sisrefLogo} alt="Sisref" />
                <div className={styles.names}>
                    <div className={styles.nameRU}>Restaurante Universitário</div>
                    <div className={styles.nameCampus}>IFCE Campus Cedro</div>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.groupForm}>
                        <TextField
                            type="email"
                            name="Email"
                            id="Email"
                            value={email}
                            onChange={handleEmailChange}
                            fullWidth
                            variant="outlined"
                            label="Email"
                        />
                    </div>
                    <div className={styles.groupForm}>
                        <TextField
                            type="password"
                            name="Password"
                            id="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            fullWidth
                            variant="outlined"
                            label="Senha"
                        />
                    </div>
                    <div className={styles.extra}>
                        <div className={styles.remember}>
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                            />
                            <label htmlFor="remember">Lembre-se de mim</label>
                        </div>
                        <a href="#" className={styles.forgot}>Esqueceu a senha?</a>
                    </div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Entrar
                    </Button>
                </form>
            </div>
        </>
    );
}

export default LoginPage;