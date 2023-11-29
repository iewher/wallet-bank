import React, { useState } from "react";
import "../../scss/expenses/expenses.scss";
import { PieChart } from "@mui/x-charts/PieChart";
import { Dropdown, MenuProps } from "antd";

interface PriceProps {
  title: string;
  price: number;
}

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
  const [month, setMonth] = useState<string>("6 Month");

  return (
    <div className="expenses">
      <div className="expenses-title">
        <h1>All Expenses</h1>
        <Dropdown menu={{ items }}>
          <button>{month}</button>
        </Dropdown>
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
