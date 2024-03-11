import React from "react";
import styles from "./loginPage.module.css"; 
import sisrefLogo from "./sisrefLogo.png";


const loginPage = () => {
    return (
        <div className={styles.container}>
            <img src={sisrefLogo} alt="imagem aqui" />
            <div className={styles.names}>
                <div className={styles.nameRU}>Restaurante Universitario</div>
                <div className={styles.nameCampus}>Campus Cedro</div>
            </div>
            <form className= {styles.form}>
                <div className={styles.groupForm}>
                    <input
                        type="email"
                        name="Email"
                        id="Email"
                        placeholder="Email"
                    />
                </div>
                <div className={styles.groupForm}>
                    <input
                        type="password"
                        name="Password"
                        id="Password"
                        placeholder="Senha"
                    />
                </div>
                <div className={styles.extra}>
                    <div className={styles.remember}>
                        <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                        />
                        <label htmlFor="remember">Lembra</label>
                    </div>
                        <a href="#" className={styles.forgot}>Esqueceu a senha?</a>
                </div>
                <input type="submit" value="Enviar" className={styles.send} />
            </form>
        </div>
    );
};

export default loginPage;
