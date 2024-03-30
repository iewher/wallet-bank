"use client";

import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { PrimaryButton, SecondaryButton } from "../../../components/buttons";
import Input from "../../../components/inputs";
import styles from "./index.module.scss";

const Sidebar = () => {
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
        <div className={styles.Info}>
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
        <SecondaryButton>Add card</SecondaryButton>
      </div>
      <div className={styles.Transfer}>
        <h1>Quick Transfer</h1>
        <div className={styles.Input}>
          <p>Card Number</p>
          <Input type="text" />
        </div>
        <div className={styles.Send}>
          <PrimaryButton>Send money</PrimaryButton>
          <SecondaryButton>Save as Draft</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
