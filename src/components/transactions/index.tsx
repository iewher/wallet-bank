"use client";

import { useState } from "react";
import styles from "./index.module.scss";

interface CardProsp {
  title: string;
  date: string;
  value: number;
}

const Card: React.FunctionComponent<CardProsp> = ({ title, date, value }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Title}>
        <p>{title}</p>
        <p>{date}</p>
      </div>
      {value > 0 ? (
        <div className={styles.Plus}>
          <p>{value + " $"}</p>
        </div>
      ) : (
        <div className={styles.Minus}>
          <p>{value + " $"}</p>
        </div>
      )}
    </div>
  );
};

const Transactions: React.FunctionComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.Transactions}>
      <div className={styles.Title}>
        <h1>History Transactions</h1>
        <button onClick={() => setOpenModal(true)}>View all</button>
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
