import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore menu!</h1>
      <p className="explore-menu-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, magni?
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              className="explore-menu-list-item"
              key={index}
              // on click of category we are checking if our prev state was same as current menu name, then we will change menu to display all items else we will select the menu which we have clicked //
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              }}
            >
              <img
                src={item.menu_image}
                alt=""
                className={category === item.menu_name ? "active" : ""}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
