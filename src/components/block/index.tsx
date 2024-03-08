import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "./index.module.scss";

interface CardProps {
  title: string;
  balance: string;
  proc: number;
}

const Card: React.FunctionComponent<CardProps> = ({ title, balance, proc }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Number}>
        <p>{title}</p>
        <p>$ {balance}</p>
      </div>
      {proc > 0 ? (
        <div className={styles.Plus}>
          <AiOutlineArrowUp />
          <p>{proc + "%"}</p>
        </div>
      ) : (
        <div className={styles.Minus}>
          <AiOutlineArrowUp />
          <p>{proc + "%"}</p>
        </div>
      )}
    </div>
  );
};

const Block: React.FunctionComponent = () => {
  return (
    <div className="block">
      <Card title="My Balance" balance="128,320" proc={55} />
      <Card title="Income" balance="128,320" proc={-15} />
      <Card title="Savings" balance="128,320" proc={100} />
      <Card title="Expense" balance="128,320" proc={-75} />
    </div>
  );
};

export default Block;
