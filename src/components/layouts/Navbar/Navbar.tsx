// components/layout/Navbar.tsx
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { ROUTES } from "@/constants/routes";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href={ROUTES.HOME}>MyProject</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href={ROUTES.HOME}>Accueil</Link>
        </li>
        <li>
          <Link href={ROUTES.LOGIN}>Connexion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
