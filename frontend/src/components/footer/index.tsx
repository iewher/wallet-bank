import { FaTelegram, FaGithub } from "react-icons/fa";
import Link from "next/link";
import logo from '../../../public/logo.png'
import Image from "next/image";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Logo}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.Nav}>
        <div className={styles.row}>
          <Link href="/view">Обзор</Link>
          <Link href="/transactions">Транзакции</Link>
          <Link href="/wallet">Кошелек</Link>
          <Link href="/activity">Активность</Link>
        </div>
        <div className={styles.row}>
          <Link href="https://github.com/iewher/wallet-dashboard">
            <FaGithub />
            Отслеживай GitHub репозиторий
          </Link>
          <Link href="https://t.me/iewher">
            <FaTelegram />
            Напиши мне в телеграм
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
