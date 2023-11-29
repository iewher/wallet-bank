import React, { useState } from "react";
import "../../scss/chart/chart.scss";
import { LineChart } from "@mui/x-charts/LineChart";
import { Dropdown, MenuProps } from "antd";

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
    <div className="chart">
      <div className="chart-title">
        <h1>Money Flow</h1>
        <div className="chart-title__buttons">
          <button>Money Flow</button>
          <Dropdown menu={{ items }}>
            <button>{month}</button>
          </Dropdown>
        </div>
      </div>
      <div className="chart-line">
        <LineChart
          series={[{ data: data, color: "#00b3ff" }]}
          xAxis={[{ scaleType: "point", data: labels }]}
        />
      </div>
    </div>
  );
};

export default Chart;
