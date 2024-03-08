"use client";

import React, { useState } from "react";
import logo from "../../../public/logo.svg";
import { AiOutlineUser } from "react-icons/ai";
import { Switch } from "antd";
import { Badge } from "antd";
import { Modal } from "antd";
import styles from "./index.module.scss";

// interface HeaderProps {}

const Header: React.FunctionComponent = () => {
  const [openModalPush, setOpenModalPush] = useState<boolean>(false);
  const [openModalSetting, setOpenModalSetting] = useState<boolean>(false);
  const [openModalAuth, setOpenModalAuth] = useState<boolean>(false);

  return (
    <div className={styles.Header}>
      <div className={styles.Container}>
        <div className={styles.Buttons}>
          <img src={logo} alt="logo" />
          <button>Overview</button>
          <button>Transaction</button>
          <button>Invoice</button>
          <button>Activity</button>
        </div>
        <div className={styles.Settings}>
          <div className={styles.Switch}>
            <Switch />
          </div>
          <Badge count={5}>
            <button onClick={() => setOpenModalPush(true)}></button>
          </Badge>
          <button onClick={() => setOpenModalSetting(true)}></button>
          <button className="user" onClick={() => setOpenModalAuth(true)}>
            <AiOutlineUser size={"16px"} color="#D6D7DB" />
          </button>
        </div>
      </div>
      <Modal
        title="Notification"
        centered
        open={openModalPush}
        onOk={() => setOpenModalPush(false)}
        onCancel={() => setOpenModalPush(false)}
      >
        <p>Notifications feature is under development</p>
      </Modal>
      <Modal
        title="Settings"
        centered
        open={openModalSetting}
        onOk={() => setOpenModalSetting(false)}
        onCancel={() => setOpenModalSetting(false)}
      >
        <p>Settings feature is under development</p>
      </Modal>
      <Modal
        title="Auth"
        centered
        open={openModalAuth}
        onOk={() => setOpenModalAuth(false)}
        onCancel={() => setOpenModalAuth(false)}
      >
        <p>Auth feature is under development</p>
      </Modal>
    </div>
  );
};

export default Header;
