import React, { useState } from "react";
import { Modal } from "antd";
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
      {value > 0 ? (
        <div className="card-info-value-plus">
          <p>{value + " $"}</p>
        </div>
      ) : (
        <div className="card-info-value-minus">
          <p>{value + " $"}</p>
        </div>
      )}
    </div>
  );
};

const Transactions: React.FunctionComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="transactions">
      <div className="transactions-title">
        <h1>History Transactions</h1>
        <button onClick={() => setOpenModal(true)}>View all</button>
      </div>
      <div className="transactions-view">
        <Card title="Order Revenue" date="Apr 27, 22" value={874} />
        <Card title="Withdrawal Initiated" date="Apr 27, 22" value={1500} />
        <Card title="Order Revenue" date="Apr 27, 22" value={-355} />
      </div>
      <Modal
        title="All History Transactions"
        centered
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
      >
        <div className="transactions-view">
          <Card title="Order Revenue" date="Apr 27, 22" value={874} />
          <Card title="Withdrawal Initiated" date="Apr 27, 22" value={1500} />
          <Card title="Order Revenue" date="Apr 27, 22" value={-355} />
          <Card title="Order Revenue" date="Apr 27, 22" value={874} />
          <Card title="Withdrawal Initiated" date="Apr 27, 22" value={1500} />
          <Card title="Order Revenue" date="Apr 27, 22" value={-355} />
          <Card title="Order Revenue" date="Apr 27, 22" value={874} />
          <Card title="Withdrawal Initiated" date="Apr 27, 22" value={1500} />
          <Card title="Order Revenue" date="Apr 27, 22" value={-355} />
        </div>
      </Modal>
    </div>
  );
};

export default Transactions;
