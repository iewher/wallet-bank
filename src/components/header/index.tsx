"use client";

import { useState } from "react";
import { Badge, Modal, Switch } from "antd";
import { FiSettings, FiUser } from "react-icons/fi";
import { PrimaryButton } from "../buttons";
import styles from "./index.module.scss";

// interface HeaderProps {}

const Header: React.FunctionComponent = () => {
  const [openModalPush, setOpenModalPush] = useState(false);
  const [openModalSetting, setOpenModalSetting] = useState(false);
  const [openModalAuth, setOpenModalAuth] = useState(false);

  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>
        {/* TODO: Вернуть логотип*/}
        <img alt="logo" />
      </div>
      <div className={styles.Navigations}>
        <PrimaryButton>Overview</PrimaryButton>
        <PrimaryButton>Transaction</PrimaryButton>
        <PrimaryButton>Invoice</PrimaryButton>
        <PrimaryButton>Activity</PrimaryButton>
      </div>
      <div className={styles.Actions}>
        <div className={styles.Switch}>
          <Switch />
        </div>
        <Badge count={5}>
          <PrimaryButton onClick={() => setOpenModalPush(true)}>
            <FiSettings />
          </PrimaryButton>
        </Badge>
        <PrimaryButton onClick={() => setOpenModalAuth(true)}>
          <FiUser size={"16px"} />
        </PrimaryButton>
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
