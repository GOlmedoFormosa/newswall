import { useEffect } from "react";
import { Logo } from "../../components/Logo";
import styles from "./styles.module.css";
import { setUserSession, getUser } from "../../utils/auth";

export const Navbar = () => {
  const user = getUser();
  return (
    <div className={styles.navbar}>
      <Logo />
      <h1 className={styles.title}>News Wall</h1>
      <div className={styles.test_users}>
        <select
          onChange={(e) => {
            setUserSession({
              id: e.target.value,
              name: e.target.options[e.target.selectedIndex].text,
            });
            window.location.reload();
          }}
          value={user.id}
        >
          <option value="1">Gustavo Olmedo</option>
          <option value="2">Sofie Söderström</option>
        </select>
      </div>
    </div>
  );
};
