// components/layout/MainLayout.tsx

import styles from "./MainLayout.module.scss";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
