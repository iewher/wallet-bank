import React from "react";
import "../../scss/chart/chart.scss";

const Chart: React.FunctionComponent = () => {
  return (
    <div className="chart">
      <div className="chart-title">
        <h1>Money Flow</h1>
        <div className="chart-title__buttons">
          <button>Money Flow</button>
          <button>6 Month</button>
        </div>
      </div>
      <div className="chart-line"></div>
    </div>
  );
};

export default Chart;
