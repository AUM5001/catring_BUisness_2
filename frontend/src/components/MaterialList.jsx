// src/components/MaterialList.js
import React from "react";
import "../css File/MaterialList.css"; // Import CSS file

const MaterialList = ({ materials }) => {
  return (
    <div className="material-list">
      {materials.map((material, index) => {
        const needToBuy = Math.max(0, material.required - material.available);

        return (
          <div key={index} className="material-card">
            <img src={material.image} alt={material.name} className="material-image" />
            <div className="material-info">
              <h3>{material.name}</h3>
              <p><strong>Required:</strong> {material.required}</p>
              <p><strong>Available:</strong> {material.available}</p>
              <p className="need-to-buy"><strong>Need to Buy:</strong> {needToBuy}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MaterialList;
