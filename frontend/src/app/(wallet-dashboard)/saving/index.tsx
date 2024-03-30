"use client";

import { useState } from "react";
import { PrimaryButton } from "../../../components/buttons";
import { Progress } from "antd";
import styles from "./index.module.scss";

interface ListProps {
  title: string;
  price: number;
}

const List = ({ title, price }: ListProps) => {
  return (
    <div className={styles.List}>
      <div className={styles.Info}>
        <div className={styles.Name}>
          <p>{title}</p>
        </div>
        <div className={styles.Price}>
          <p>{"$" + price}</p>
        </div>
      </div>
      <div className={styles.Progress}>
        <Progress percent={price} />
      </div>
    </div>
  );
};

const Saving = () => {
  return (
    <div className={styles.Saving}>
      <div className={styles.Title}>
        <h1>My Savings</h1>
        <PrimaryButton>View all</PrimaryButton>
      </div>
      <div className={styles.Lists}>
        <List title="Gaming PC" price={309} />
        <List title="New house" price={950} />
        <List title="Summer trip" price={550} />
        <List title="Wedding" price={620} />
        <List title="Wedding" price={170} />
      </div>
    </div>
  );
};

export default Saving;
