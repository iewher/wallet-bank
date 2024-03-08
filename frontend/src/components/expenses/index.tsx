"use client";

import { useState } from "react";
import styles from "./index.module.scss";

interface PriceProps {
  title: string;
  price: number;
}

const Price: React.FunctionComponent<PriceProps> = ({ title, price }) => {
  return (
    <div className={styles.Price}>
      <div className={styles.Title}>
        <p>{title}</p>
      </div>
      <div className={styles.Number}>
        <p>{"$" + price}</p>
      </div>
    </div>
  );
};

const Expenses: React.FunctionComponent = () => {
  return (
    <div className={styles.Expenses}>
      <div className={styles.Title}>
        <h1>All Expenses</h1>
      </div>
      <Price title="Daily" price={475} />
      <Price title="Weekly" price={3327} />
      <Price title="Monthly" price={12131} />
    </div>
  );
};

export default Expenses;
