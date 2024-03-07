import HamburgerMenuItem from '../Icons/HamburgerMenuIcon';
import LogoutIcon from '../Icons/LogoutIcon';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <HamburgerMenuItem/>
      <LogoutIcon/>
    </div>
  );
};

export default Navbar;