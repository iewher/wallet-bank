import React from "react";
import "../../scss/block/block.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

interface CardProps {
  title: string;
  balance: string;
  proc: number;
}

const Card: React.FunctionComponent<CardProps> = ({ title, balance, proc }) => {
  return (
    <div className="card">
      <div className="card__number">
        <p>{title}</p>
        <p>$ {balance}</p>
      </div>
      {proc > 0 ? (
        <div className="card__proc-plus">
          <AiOutlineArrowUp />
          <p>{proc + "%"}</p>
        </div>
      ) : (
        <div className="card__proc-minus">
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
