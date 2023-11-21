import React, { useEffect, useState } from "react";
import "../scss/app/app.scss";
import PageLayout from "../components/page-layout/page-layout";
import Sidebar from "../components/sidebar/sidebar";
import Content from "../components/content/content";
import { Modal, QRCode } from "antd";

// interface AppProps {}

const App: React.FunctionComponent = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const text = "https://github.com/iewher/wallet-dashboard";

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 10000);
  }, []);

  return (
    <PageLayout>
      <div className="main">
        <div className="main-container">
          <Sidebar />
          <Content />
        </div>
      </div>
      <Modal
        centered
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
      >
        <div className="qrcode">
          <h3>I would be grateful if you rate the work on github</h3>
          <QRCode value={text || "-"} />
          <p>Thank you in advance</p>
          <p>
            If so, here's the link:{" "}
            <a href="https://github.com/iewher/wallet-dashboard">
              https://github.com/iewher/wallet-dashboard
            </a>
          </p>
        </div>
      </Modal>
    </PageLayout>
  );
};

export default App;
