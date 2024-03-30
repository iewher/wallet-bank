import Sidebar from "./sidebar";
import Block from "./block";
import Chart from "./chart";
import Saving from "./saving";
import Expenses from "./expenses";
import Transactions from "./transactions";
import styles from "./page.module.scss";

const Page = () => {
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
