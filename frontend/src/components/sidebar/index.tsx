"use client";

import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { PrimaryButton } from "../buttons";
import styles from "./index.module.scss";

const Sidebar: React.FunctionComponent = () => {
  const [value, setValue] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalUser, setOpenModalUser] = useState<boolean>(false);
  const [usernames, setUsernames] = useState<string[]>([]);
  const [_, setSelectedUser] = useState<string | null>(null);

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

  const handleSelectUser = (username: string) => {
    setSelectedUser(username);
    setValue(username);
  };

  return (
    <div className={styles.Sidebar}>
      <div className={styles.Balance}>
        <div className={styles.Block}>
          <p>Your Balance</p>
          <div className={styles.Price}>
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
        <div className={styles.Currency}>
          <div className={styles.Currency}>
            <p>Currency</p>
            <p>USD/ US Dollar</p>
          </div>
          <div className={styles.Status}>
            <p>Status</p>
            <p>Active</p>
          </div>
        </div>
      </div>
      <div className={styles.AddCard}>
        <PrimaryButton>Add card</PrimaryButton>
      </div>
      <div className={styles.Transfer}>
        <h1>Quick Transfer</h1>
        <div className={styles.Users}>
          {usernames.map((username, index) => (
            <PrimaryButton
              key={index}
              onClick={() => handleSelectUser(username)}
            >
              {username}
            </PrimaryButton>
          ))}
        </div>
        <div className={styles.Input}>
          <p>Card Number</p>
          <input type="text" value={value} onChange={handleInputChange} />
        </div>
        <div className={styles.Send}>
          <PrimaryButton onClick={() => setOpenModal(true)}>
            Send money
          </PrimaryButton>
          <PrimaryButton onClick={() => setOpenModalUser(true)}>
            Save as Draft
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
