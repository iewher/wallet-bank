import React from "react";
import "../../scss/expenses/expenses.scss";

interface PriceProps {
  title: string;
  price: number;
}

const Price: React.FunctionComponent<PriceProps> = ({ title, price }) => {
  return (
    <div className="price">
      <div className="price-title">
        <p>{title}</p>
      </div>
      <div className="price-price">
        <p>{"$" + price}</p>
      </div>
    </div>
  );
};

const Expenses: React.FunctionComponent = () => {
  return (
    <div className="expenses">
      <div className="expenses-title">
        <h1>All Expenses</h1>
        <button>6 Month</button>
      </div>
      <div className="expenses-price">
        <Price title="Daily" price={475} />
        <Price title="Daily" price={475} />
        <Price title="Daily" price={475} />
      </div>
      <div className="expenses-pie"></div>
    </div>
  );
};

export default Expenses;
