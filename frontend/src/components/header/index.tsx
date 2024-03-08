import { FiDatabase, FiSettings, FiUser } from "react-icons/fi";
import { PrimaryButton } from "../buttons";
import styles from "./index.module.scss";

// interface HeaderProps {}

const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>
        <FiDatabase />
        <p>Wallet Dashboard</p>
      </div>
      <div className={styles.Navigations}>
        <PrimaryButton>Overview</PrimaryButton>
        <PrimaryButton>Transaction</PrimaryButton>
        <PrimaryButton>Invoice</PrimaryButton>
        <PrimaryButton>Activity</PrimaryButton>
      </div>
      <div className={styles.Actions}>
        <PrimaryButton>
          <FiSettings />
        </PrimaryButton>
        <PrimaryButton>
          <FiUser />
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Header;
