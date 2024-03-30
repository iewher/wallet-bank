"use client";

import { SecondaryButton } from "@/components/buttons";
import { logout } from "@/lib/backend/user";
import SidebarProfile from "./sidebar";
import styles from "./page.module.scss";

const ProfilePage = () => {
  return (
    <div className={styles.Page}>
      <SidebarProfile />
      <div className={styles.Content}>
        Страница профиля на данный момент в разработке
      </div>
    </div>
  );
};

export default ProfilePage;
