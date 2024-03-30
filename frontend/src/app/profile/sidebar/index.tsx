import { SecondaryButton } from "@/components/buttons";
import { FiUser } from "react-icons/fi";
import styles from "./index.module.scss";
import { logout } from "@/lib/backend/user";

const SidebarProfile = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.Avatar}>
        <FiUser />
      </div>
      <div className={styles.Actions}>
        <SecondaryButton>На главную</SecondaryButton>
        <SecondaryButton>Настройки</SecondaryButton>
        <SecondaryButton>Статистика</SecondaryButton>
      </div>

      <SecondaryButton onClick={() => logout()}>Выйти</SecondaryButton>
    </div>
  );
};

export default SidebarProfile;
