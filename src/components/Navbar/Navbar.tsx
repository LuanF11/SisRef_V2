import React, { useContext } from 'react';
import { TokenContext } from '@/lib/contexts/TokenContext';
import HamburgerMenuItem from '../Icons/HamburgerMenuIcon';
import LogoutIcon from '../Icons/LogoutIcon';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { token, setToken } = useContext(TokenContext);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('@rucedro-Token');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        {token && (
          <>
            <LogoutIcon onClick={handleLogout} />
            <HamburgerMenuItem />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;