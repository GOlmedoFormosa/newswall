import { Logo } from "../../components/Logo";
import styles from "./styles.module.css";

export const Navbar = () => (
  <div className={styles.navbar}>
    <Logo />
    <h1 className={styles.title}>News Wall</h1>
  </div>
);
