"use client";

import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { PrimaryButton, SecondaryButton } from "../../../components/buttons";
import styles from "./index.module.scss";

type DataProps = {
  data: string;
  labels: string;
};

const Chart = () => {
  const [month, setMonth] = useState(1 || 3 || 6 || 9 || 12);
  const [data, setData] = useState<DataProps[]>([
    { data: "30", labels: "Feb" },
    { data: "10", labels: "Mar" },
    { data: "65", labels: "Apr" },
    { data: "100", labels: "May" },
    { data: "30", labels: "Jun" },
    { data: "30", labels: "Jul" },
    { data: "30", labels: "Aug" },
    { data: "30", labels: "Sep" },
    { data: "50", labels: "Oct" },
    { data: "50", labels: "Nov" },
    { data: "50", labels: "Dec" },
    { data: "50", labels: "Jan" },
  ]);

  const filteredData: DataProps[] = [];

  for (let i = 0; i < month; i++) {
    filteredData.push(data[i]);
  }

  return (
    <div className={styles.Chart}>
      <div className={styles.Title}>
        <h1>Money Flow</h1>
        <div className={styles.Actions}>
          <PrimaryButton>Money Flow</PrimaryButton>
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
    </div>
  );
};

export default Chart;
