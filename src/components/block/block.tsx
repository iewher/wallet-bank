import React from "react";

interface CardProps {
  title: string;
  balance: string;
  proc?: string | number;
}

const Card: React.FunctionComponent<CardProps> = ({ title, balance, proc }) => {
  return (
    <div className="card">
      <div className="card__number">
        <p>{title}</p>
        <p>$ {balance}</p>
      </div>
      <div className="card__proc">
        <p>{proc}</p>
      </div>
    </div>
  );
};

const Block: React.FunctionComponent = () => {
  return (
    <div className="block">
      <Card title="My Balance" balance="128,320" proc={"55%"} />
      <Card title="Income" balance="128,320" proc={"55%"} />
      <Card title="Savings" balance="128,320" proc={"55%"} />
      <Card title="Expense" balance="128,320" proc={"55%"} />
    </div>
  );
};

export default Block;
