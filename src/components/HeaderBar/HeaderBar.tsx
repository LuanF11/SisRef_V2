import React from 'react';
import style from './HeaderBar.module.css';

interface HeaderBarProps {
    children: React.ReactNode;
    variant?: "preto";
}

const HeaderBar = ({ children }: HeaderBarProps) => {
    return <header className={style.black}>{children}</header>
}

export default HeaderBar;