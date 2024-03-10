import { TokenContext } from '@/lib/contexts/TokenContext';
import HamburgerMenuItem from '../Icons/HamburgerMenuIcon';
import LogoutIcon from '../Icons/LogoutIcon';
import styles from './Navbar.module.css'
import React from 'react';

const Navbar = () => {
  const tokenContext = React.useContext(TokenContext)

  const handleLogout = () => {
    tokenContext.setToken(null)
    localStorage.removeItem('@rucedro-Token');
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        {
          tokenContext.token && (
            <>
              <LogoutIcon onClick={handleLogout} />
              <HamburgerMenuItem />
            </>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;