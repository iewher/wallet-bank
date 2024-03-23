"use client";

import { SecondaryButton } from "@/components/buttons";
import { logout } from "@/lib/backend/user";
import styles from "./page.module.scss";

const ProfilePage = () => {
  return (
    <div className={styles.Profile}>
      <h1>Профиль</h1>
      <button className={styles.Image}>Аватарка</button>
      <div className={styles.Description}>
        <p>Описание</p>
      </div>
      <div className={styles.Actions}>
        <SecondaryButton>История транзакций</SecondaryButton>
        <SecondaryButton>Настройки</SecondaryButton>
        <SecondaryButton>Ситуация на рынке</SecondaryButton>
        <SecondaryButton onClick={logout}>Выйти</SecondaryButton>
      </div>
    </div>
  );
};

export default ProfilePage;
