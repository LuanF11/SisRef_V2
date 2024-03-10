import React from "react";
import styles from "./loginPage.module.css"; 


const loginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                logo
            </div>
            <div className={styles.names}>
                <div className={styles.nameRU}>asas fdfd</div>
                <div className={styles.nameCampus}>dfdfdf dfdfdf</div>
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
                    <div className={styles.forgot}>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                </div>
                <input type="submit" value="Enviar" className={styles.send} />
            </form>
        </div>
    );
};

export default loginPage;
