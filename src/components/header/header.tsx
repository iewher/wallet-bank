import React from "react";
import "../../scss/header/header.scss";
import logo from "../../svg/header/logo.svg";
import Overview from "../../svg/header/overview.svg";
import Transaction from "../../svg/header/transaction.svg";
import Invoice from "../../svg/header/invoice.svg";
import Activity from "../../svg/header/activity.svg";
import Push from "../../svg/header/push.svg";
import Setting from "../../svg/header/setting.svg";
import { AiOutlineUser } from "react-icons/ai";
import { Switch } from "antd";
import { Badge } from "antd";

// interface HeaderProps {}

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container__buttons">
          <img src={logo} alt="logo" />
          <button>
            <img src={Overview} alt="Overview" />
            Overview
          </button>
          <button>
            <img src={Transaction} alt="Transaction" />
            Transaction
          </button>
          <button>
            <img src={Invoice} alt="Invoice" />
            Invoice
          </button>
          <button>
            <img src={Activity} alt="Activity" />
            Activity
          </button>
        </div>
        <div className="header-container__settings">
          <div className="switch">
            <Switch
            // checkedChildren={<Setting />}
            // unCheckedChildren={<Push />}
            />
          </div>
          <Badge count={5}>
            <button>
              <img src={Push} alt="Push" />
            </button>
          </Badge>
          <button>
            <img src={Setting} alt="Setting" />
          </button>
          <button className="user">
            <AiOutlineUser size={"16px"} color="#D6D7DB" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
