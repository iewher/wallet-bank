"use client";

import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { PrimaryButton, SecondaryButton } from "../../../components/buttons";
import styles from "./index.module.scss";

const Chart = () => {
  const [data, setData] = useState([
    { data: "30", labels: "Jan" },
    { data: "50", labels: "Feb" },
    { data: "10", labels: "Mar" },
    { data: "65", labels: "Apr" },
    { data: "100", labels: "May" },
    { data: "30", labels: "Jun" },
  ]);

  return (
    <div className={styles.Chart}>
      <div className={styles.Title}>
        <h1>Money Flow</h1>
        <div className={styles.Actions}>
          <PrimaryButton>Money Flow</PrimaryButton>
          <SecondaryButton>Dropdown</SecondaryButton>
        </div>
      </div>
      <div className={styles.Line}>
        <LineChart
          series={[
            { data: data.map((i) => i.data).map(Number), color: "#00b3ff" },
          ]}
          xAxis={[{ scaleType: "point", data: data.map(i => i.labels) }]}
        />
      </div>
    </div>
  );
};

export default Chart;
