"use client";

import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Dropdown, MenuProps } from "antd";
import { PrimaryButton } from "../buttons";
import styles from "./index.module.scss";

const items: MenuProps["items"] = [
  {
    key: "1m",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        1 Month
      </a>
    ),
  },
  {
    key: "3m",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        3 Month
      </a>
    ),
  },
  {
    key: "6m",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        6 Month
      </a>
    ),
  },
  {
    key: "9m",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        9 Month
      </a>
    ),
  },
  {
    key: "12m",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        12 Month
      </a>
    ),
  },
];

const Chart: React.FunctionComponent = () => {
  const [month, setMonth] = useState<string>("6 Month");
  const data = [30, 60, 35, 70, 85, 75];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <div className={styles.Chart}>
      <div className={styles.Title}>
        <h1>Money Flow</h1>
        <div className={styles.Actions}>
          <PrimaryButton>Money Flow</PrimaryButton>
          <Dropdown menu={{ items }}>
            <PrimaryButton>{month}</PrimaryButton>
          </Dropdown>
        </div>
      </div>
      <div className={styles.Line}>
        <LineChart
          series={[{ data: data, color: "#00b3ff" }]}
          xAxis={[{ scaleType: "point", data: labels }]}
        />
      </div>
    </div>
  );
};

export default Chart;
