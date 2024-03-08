import React from "react";
import Block from "@/components/block";
import Chart from "@/components/chart";
import Saving from "@/components/saving";
import Expenses from "@/components/expenses";
import Transactions from "@/components/transactions";
import Sidebar from "@/components/sidebar";
import styles from "./page.module.scss";

const Content: React.FunctionComponent = () => {
  return (
    <div className={styles.Content}>
      <Sidebar />
      <Block />
      <Chart />
      <Saving />
      <Expenses />
      <Transactions />
    </div>
  );
};

export default Content;
