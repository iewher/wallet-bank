"use client";

import {
  FiDatabase,
  FiUser,
  FiActivity,
  FiMonitor,
  FiInfo,
  FiCreditCard,
} from "react-icons/fi";
import { PrimaryButton } from "../buttons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { currentUser } from "@/lib/backend/user";
import styles from "./index.module.scss";

const Header: React.FunctionComponent = () => {
  const router = useRouter();
  const user = currentUser();

  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>
        <FiDatabase />
        <Link href={"/"}>Wallet Dashboard</Link>
      </div>
      <div className={styles.Navigations}>
        <PrimaryButton icon={<FiInfo />}>Обзор</PrimaryButton>
        <PrimaryButton icon={<FiMonitor />}>Транзакции</PrimaryButton>
        <PrimaryButton icon={<FiCreditCard />}>Кошелек</PrimaryButton>
        <PrimaryButton icon={<FiActivity />}>Активность</PrimaryButton>
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
