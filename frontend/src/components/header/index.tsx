"use client";

import {
  FiDatabase,
  FiUser,
  FiActivity,
  FiMonitor,
  FiInfo,
  FiCreditCard,
} from "react-icons/fi";
import { SecondaryButton, PrimaryButton } from "../buttons";
import { useRouter } from "next/navigation";
import { currentUser } from "@/lib/backend/user";
import Link from "next/link";
import styles from "./index.module.scss";

const Header = () => {
  const router = useRouter();
  const user = currentUser();

  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>
        <FiDatabase />
        <Link href={"/"}>Wallet Dashboard</Link>
      </div>
      <div className={styles.Navigations}>
        <SecondaryButton icon={<FiInfo />}>Обзор</SecondaryButton>
        <SecondaryButton icon={<FiMonitor />}>Транзакции</SecondaryButton>
        <SecondaryButton icon={<FiCreditCard />}>Кошелек</SecondaryButton>
        <SecondaryButton icon={<FiActivity />}>Активность</SecondaryButton>
      </div>
      <div className={styles.Actions}>
        {user ? (
          <PrimaryButton onClick={() => router.push("/profile")}>
            Профиль
          </PrimaryButton>
        ) : (
          <PrimaryButton onClick={() => router.push("/auth")} icon={<FiUser />}>
            Войти
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

export default Header;
