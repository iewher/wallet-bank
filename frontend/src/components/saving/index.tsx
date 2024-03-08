"use client";

import React, { useState } from "react";
import { PrimaryButton } from "../buttons";
import styles from "./index.module.scss";

interface ListProps {
  title: string;
  price: number;
}

const List: React.FunctionComponent<ListProps> = ({ title, price }) => {
  return (
    <div className={styles.List}>
      <div className={styles.Title}>
        <p>{title}</p>
      </div>
      <div className={styles.Price}>
        <p>{"$" + price}</p>
      </div>
    </div>
  );
};

const Saving: React.FunctionComponent = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className={styles.Saving}>
      <div className={styles.Title}>
        <h1>My Savings</h1>
        <PrimaryButton onClick={() => setOpenModal(true)}>
          View all
        </PrimaryButton>
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
