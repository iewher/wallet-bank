"use client";

import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { PrimaryButton } from "../../../components/buttons";
import Modal from "antd/es/modal/Modal";
import styles from "./index.module.scss";

type DataProps = {
  data: string;
  labels: string;
};

const Chart = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [modalValue, setModalValue] = useState("");
  const [month, setMonth] = useState(1 || 3 || 6 || 9 || 12);
  const [data, setData] = useState<DataProps[]>([
    { data: "0", labels: "Feb" },
    { data: "0", labels: "Mar" },
    { data: "0", labels: "Apr" },
    { data: "0", labels: "May" },
    { data: "0", labels: "Jun" },
    { data: "0", labels: "Jul" },
    { data: "0", labels: "Aug" },
    { data: "0", labels: "Sep" },
    { data: "0", labels: "Oct" },
    { data: "0", labels: "Nov" },
    { data: "0", labels: "Dec" },
    { data: "0", labels: "Jan" },
  ]);

  const filteredData: DataProps[] = [];

  for (let i = 0; i < month; i++) {
    filteredData.push(data[i]);
  }

  const closeModal = () => {
    const updatedData = data.map((item) =>
      item.labels === selectedMonth ? { ...item, data: modalValue } : item,
    );
    setData(updatedData);
    setOpenModal(false);
  };

  return (
    <div className={styles.Chart}>
      <div className={styles.Title}>
        <h1>Money Flow</h1>
        <div className={styles.Actions}>
          <PrimaryButton onClick={() => setOpenModal(true)}>
            Выбрать
          </PrimaryButton>
          <select onChange={(e) => setMonth(parseInt(e.target.value))}>
            <option value={1}>1 месяц</option>
            <option value={3}>3 месяц</option>
            <option value={6}>6 месяц</option>
            <option value={9}>9 месяц</option>
            <option value={12}>12 месяц</option>
          </select>
        </div>
      </div>
      <div className={styles.Line}>
        <LineChart
          series={[
            {
              data: filteredData.map((i) => i.data).map(Number),
              color: "#00b3ff",
            },
          ]}
          xAxis={[
            { scaleType: "point", data: filteredData.map((i) => i.labels) },
          ]}
        />
      </div>
      <Modal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        onOk={() => closeModal()}
        centered
      >
        <h2>Выберите месяц</h2>
        <div className={styles.Choose}>
          <select onChange={(e) => setSelectedMonth(e.target.value)}>
            {data.map((i) => (
              <option>{i.labels}</option>
            ))}
          </select>
          <input
            name="value"
            placeholder="Введите значение"
            value={modalValue}
            onChange={(e) => setModalValue(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Chart;
