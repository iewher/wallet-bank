import React, { useState } from "react";
import "../../scss/sidebar/sidebar.scss";
import Card from "../../svg/sidebar/card.svg";
import Plus from "../../svg/sidebar/plus.svg";
import ArrowRight from "../../svg/sidebar/arrow-right.svg";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Modal } from "antd";

const Sidebar: React.FunctionComponent = () => {
  const [value, setValue] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalUser, setOpenModalUser] = useState<boolean>(false);
  const [usernames, setUsernames] = useState<string[]>([]);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  //TODO: Добавить Modal при нажатии на юзера, с методоми "выбрать" "удалить"
  //TODO: Подправить кнопки на модалках

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleAddUser = () => {
    if (value.trim() !== "") {
      setUsernames((prevUsernames) => [...prevUsernames, value.trim()]);
      setValue("");
      setOpenModalUser(false);
    }
  };

  const handleRemoveUser = (index: number) => {
    setUsernames((prevUsernames) =>
      prevUsernames.filter((_, i) => i !== index)
    );
  };

  const handleSelectUser = (username: string) => {
    setSelectedUser(username);
    setValue(username);
  };

  return (
    <div className="main-container__sidebar">
      <div className="card">
        <h1>My Card</h1>
        <img src={Card} alt="card" />
      </div>
      <div className="balance">
        <div className="balance__balance">
          <p>Your Balance</p>
          <div className="balance__balance-price">
            <p>$128,320</p>
            <p>
              <AiOutlineArrowUp />
              23.12%
            </p>
            <p>
              <AiOutlineArrowDown />
              23.12%
            </p>
          </div>
        </div>
        <div className="balance__currency">
          <div className="balance__currency-currency">
            <p>Currency</p>
            <p>USD/ US Dollar</p>
          </div>
          <div className="balance__currency-status">
            <p>Status</p>
            <p>Active</p>
          </div>
        </div>
      </div>
      <div className="add_card">
        <button className="add_card">
          <img src={Plus} alt="plus" />
          Add card
        </button>
      </div>
      <div className="transfer">
        <h1>Quick Transfer</h1>
        <div className="transfer__users">
          {usernames.map((username, index) => (
            <button key={index} onClick={() => handleSelectUser(username)}>
              {username}
            </button>
          ))}
        </div>
        <div className="transfer__input">
          <p>Card Number</p>
          <input type="text" value={value} onChange={handleInputChange} />
        </div>
        <div className="transfer__send">
          <button onClick={() => setOpenModal(true)}>Send money</button>
          <button onClick={() => setOpenModalUser(true)}>Save as Draft</button>
        </div>
      </div>
      <Modal
        title="Send money"
        centered
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
      >
        <div className="transfer__send-modal">
          {value.length > 0 ? (
            <>
              <p>Are you sure you want to transfer funds to this wallet?</p>
              <h2>{value}</h2>
              <p>Don't forget, you can transfer money to scammers</p>
            </>
          ) : (
            <p>
              You have not entered the address to which funds will be
              transferred
            </p>
          )}
        </div>
      </Modal>
      <Modal
        title="Added user"
        centered
        open={openModalUser}
        onOk={() => handleAddUser()}
        onCancel={() => setOpenModalUser(false)}
      >
        <div className="transfer__send-modal">
          {value.length > 0 ? (
            <>
              <p>Do you want to add a user?</p>
              <h2>{value}</h2>
            </>
          ) : (
            <p>
              You have not entered the address to which funds will be
              transferred
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
