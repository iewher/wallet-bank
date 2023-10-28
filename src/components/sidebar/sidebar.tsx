import React from "react";
import Card from "../../svg/sidebar/card.svg";
import Plus from "../../svg/sidebar/plus.svg";
import ArrowUp from "../../svg/sidebar/arrow-up.svg";
import ArrowDown from "../../svg/sidebar/arrow-down.svg";
import ArrowRight from "../../svg/sidebar/arrow-right.svg";

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className="main-container__sidebar">
      <div className="card">
        <h1>My Card</h1>
        <img src={Card} alt="card" />
      </div>
      <div className="balance">
        <div className="balance__balance">
          <p>Your Balance</p>
          <div className="balance__balance-price">
            <p>$128,320</p>
            <p>
              <img src={ArrowUp} alt="arrow-up" />
              23.12%
            </p>
            <p>
              <img src={ArrowDown} alt="arrow-down" />
              23.12%
            </p>
          </div>
        </div>
        <div className="balance__currency">
          <div className="balance__currency-currency">
            <p>Currency</p>
            <p>USD/ US Dollar</p>
          </div>
          <div className="balance__currency-status">
            <p>Status</p>
            <p>Active</p>
          </div>
        </div>
      </div>
      <div className="add_card">
        <button className="add_card">
          <img src={Plus} alt="plus" />
          Add card
        </button>
      </div>
      <div className="transfer">
        <h1>Quick Transfer</h1>
        <div className="transfer__users">
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>
            <img src={ArrowRight} alt="ArrowRight" />
          </button>
        </div>
        <div className="transfer__input">
          <p>Card Number</p>
          <input type="text" />
        </div>
        <div className="transfer__send">
          <button>Send money</button>
          <button>Save as Draft</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
