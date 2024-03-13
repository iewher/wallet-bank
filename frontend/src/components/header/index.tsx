"use client";

import { FiDatabase, FiSettings, FiUser } from "react-icons/fi";
import { PrimaryButton } from "../buttons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./index.module.scss";

const Header: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>
        <FiDatabase />
        <Link href={"/"}>Wallet Dashboard</Link>
      </div>
      <div className={styles.Navigations}>
        <PrimaryButton>Overview</PrimaryButton>
        <PrimaryButton>Transaction</PrimaryButton>
        <PrimaryButton>Invoice</PrimaryButton>
        <PrimaryButton>Activity</PrimaryButton>
      </div>
      <div className={styles.Actions}>
        {/* <PrimaryButton>
          <FiSettings />
        </PrimaryButton> */}
        <PrimaryButton onClick={() => router.push("/auth")} icon={<FiUser />}>
          Войти
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Header;
