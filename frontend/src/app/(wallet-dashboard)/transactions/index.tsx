import { PrimaryButton } from "../../../components/buttons";
import styles from "./index.module.scss";

interface CardProsp {
  title: string;
  date: string;
  value: number;
}

const Card = ({ title, date, value }: CardProsp) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Name}>
        <p>{title}</p>
        <p>{date}</p>
      </div>
      <div className={styles.Value}>
        <p className={value > 0 ? styles.plus : styles.minus}>{value + " $"}</p>
      </div>
    </div>
  );
};

const Transactions = () => {
  return (
    <div className={styles.Transactions}>
      <div className={styles.Title}>
        <h1>History Transactions</h1>
        <PrimaryButton>View all</PrimaryButton>
      </div>
      <div className={styles.View}>
        <Card title="Order Revenue" date="Apr 27, 22" value={874} />
        <Card title="Withdrawal Initiated" date="Apr 27, 22" value={1500} />
        <Card title="Order Revenue" date="Apr 27, 22" value={-355} />
      </div>
    </div>
  );
};

export default Transactions;
