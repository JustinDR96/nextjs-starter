// components/layout/Footer.tsx
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} MyProject. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
