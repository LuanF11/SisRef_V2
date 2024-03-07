import HamburgerMenuItem from '../Icons/HamburgerMenuIcon';
import LogoutIcon from '../Icons/LogoutIcon';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <LogoutIcon/>
      <HamburgerMenuItem/>
    </div>
  );
};

export default Navbar;