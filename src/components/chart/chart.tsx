import React from "react";
import "../../scss/chart/chart.scss";
import { LineChart } from "@mui/x-charts/LineChart";

const Chart: React.FunctionComponent = () => {
  const data = [30, 60, 35, 70, 85, 75];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <div className="chart">
      <div className="chart-title">
        <h1>Money Flow</h1>
        <div className="chart-title__buttons">
          <button>Money Flow</button>
          <button>6 Month</button>
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
