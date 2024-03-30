import styles from "./index.module.scss";

interface PriceProps {
  title: string;
  price: number;
}

const Price = ({ title, price }: PriceProps) => {
  return (
    <div className={styles.Price}>
      <div className={styles.Name}>
        <p>{title}</p>
      </div>
      <div className={styles.Number}>
        <p>{"$" + price}</p>
      </div>
    </div>
  );
};

const Expenses = () => {
  return (
    <div className={styles.Expenses}>
      <div className={styles.Title}>
        <h1>All Expenses</h1>
      </div>
      <div className={styles.List}>
        <Price title="Daily" price={475} />
        <Price title="Weekly" price={3327} />
        <Price title="Monthly" price={12131} />
      </div>
    </div>
  );
};

export default Expenses;
