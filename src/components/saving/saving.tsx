import React, { useState } from "react";
import { Modal } from "antd";
import "../../scss/saving/saving.scss";
import { Slider } from "antd";

interface ListProps {
  title: string;
  price: number;
}

const List: React.FunctionComponent<ListProps> = ({ title, price }) => {
  return (
    <div className="list">
      <div className="list-title">
        <p>{title}</p>
        <Slider value={price} max={1000} />
      </div>
      <div className="list-price">
        <p>{"$" + price}</p>
      </div>
    </div>
  );
};

const Saving: React.FunctionComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="saving">
      <div className="saving-title">
        <h1>My Savings</h1>
        <button onClick={() => setOpenModal(true)}>View all</button>
      </div>
      <div className="saving-list">
        <List title="Gaming PC" price={309} />
        <List title="New house" price={950} />
        <List title="Summer trip" price={550} />
        <List title="Wedding" price={620} />
        <List title="Wedding" price={170} />
      </div>
      <Modal
        title="All My Savings"
        centered
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
      >
        <List title="Gaming PC" price={309} />
        <List title="New house" price={950} />
        <List title="Summer trip" price={550} />
        <List title="Wedding" price={620} />
        <List title="Wedding" price={170} />{" "}
        <List title="Gaming PC" price={309} />
        <List title="New house" price={950} />
        <List title="Summer trip" price={550} />
        <List title="Wedding" price={620} />
        <List title="Wedding" price={170} />
      </Modal>
    </div>
  );
};

export default Saving;
