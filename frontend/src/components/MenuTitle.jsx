import React from "react";
import "../css File/MenuTitle.css"; // Import the CSS file

const MenuTile = ({ image, name, category }) => {
  return (
    <div className="menu-tile">
      <img src={image} alt={name} className="menu-image" />
      <h2 className="menu-name">{name}</h2>
      <p className="menu-category">{category}</p>
    </div>
  );
};

export default MenuTile;
