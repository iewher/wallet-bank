import React from "react";
import Block from "../block/block";
import Chart from "../chart/chart";
import Saving from "../saving/saving";
import Expenses from "../expenses/expenses";
import Transactions from "../transactions/transactions";

const Content = () => {
  return (
    <div className="main-container__content">
      <Block />
      <Chart />
      <Saving />
      <Expenses />
      <Transactions />
    </div>
  );
};

export default Content;
