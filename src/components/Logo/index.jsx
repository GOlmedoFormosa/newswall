import { ReactComponent as LogoIcon } from "../../assets/images/icons/logo.svg";
import styles from "./styles.module.css";

export const Logo = () => {
  const openMainPage = () => window.open("/", "_blank");
  return (
    <div className={styles.container}>
      <LogoIcon className={styles.logo} onClick={openMainPage} />
    </div>
  );
};
