import Block from "@/components/block";
import Chart from "@/components/chart";
import Saving from "@/components/saving";
import Expenses from "@/components/expenses";
import Transactions from "@/components/transactions";
import Sidebar from "@/components/sidebar";
import styles from "./page.module.scss";

const Page: React.FunctionComponent = () => {
  return (
    <div className={styles.Page}>
      <Sidebar />
      <div className={styles.Content}>
        <Block />
        <Chart />
        <Saving />
        <Expenses />
        <Transactions />
      </div>
    </div>
  );
};

export default Page;
