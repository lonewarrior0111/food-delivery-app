import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order here!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iure
          aliquam architecto atque? Magni maxime vitae, qui adipisci magnam
          perferendis!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
