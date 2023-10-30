import React from "react";
import "../../scss/expenses/expenses.scss";
import { PieChart } from "@mui/x-charts/PieChart";

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
        <Price title="Weekly" price={3327} />
        <Price title="Monthly" price={12131} />
      </div>
      <div className="expenses-pie">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={300}
          height={140}
        />
      </div>
    </div>
  );
};

export default Expenses;
