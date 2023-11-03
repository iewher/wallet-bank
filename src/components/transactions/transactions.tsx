import React from "react";
import "../../scss/transactions/transactions.scss";
import order from "../../svg/transactions/order.svg";
import withdrawal from "../../svg/transactions/withdrawal.svg";

interface CardProsp {
  title: string;
  date: string | number;
  value: number;
}

const Card: React.FunctionComponent<CardProsp> = ({ title, date, value }) => {
  return (
    <div className="card">
      <div className="card-info">
        <div className="card-info-image">
          {title === "Order Revenue" ? (
            <img src={order} alt="img" />
          ) : (
            <img src={withdrawal} alt="img" />
          )}
        </div>
        <div className="card-info-title">
          <p>{title}</p>
          <p>{date}</p>
        </div>
      </div>
      <div className="card-value">$ {value}</div>
    </div>
  );
};

const Transactions: React.FunctionComponent = () => {
  return (
    <div className="transactions">
      <div className="transactions-title">
        <h1>History Transactions</h1>
        <button>View all</button>
      </div>
      <div className="transactions-view">
        <Card title="Order Revenue" date="Apr 27, 22" value={874} />
        <Card title="Withdrawal Initiated" date="Apr 27, 22" value={874} />
        <Card title="Order Revenue" date="Apr 27, 22" value={874} />
      </div>
    </div>
  );
};

export default Transactions;
