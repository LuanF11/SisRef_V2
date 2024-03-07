import React from 'react';
import style from './HeaderBar.module.css';

const HeaderBar = ({ children, variant }: { children: React.ReactNode, variant?: "preto" }) => {
    if (!variant || variant === "preto") {
        return <header className={style.black}>{children}</header>
    }
}

export default HeaderBar;