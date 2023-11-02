import React from "react";
import "../../scss/transactions/transactions.scss";
import order from "../../svg/transactions/order.svg";

interface CardProsp {
  img: string;
  title: string;
  date: string | number;
  value: number;
}

const Card: React.FunctionComponent<CardProsp> = ({
  img,
  title,
  date,
  value,
}) => {
  return (
    <div className="card">
      <div className="card-info">
        <div className="card-info-image">
          <img src={img} alt="img" />
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
        <Card img={order} title="Order Revenue" date="Apr 27, 22" value={874} />
        <Card img={order} title="Order Revenue" date="Apr 27, 22" value={874} />
        <Card img={order} title="Order Revenue" date="Apr 27, 22" value={874} />
      </div>
    </div>
  );
};

export default Transactions;
