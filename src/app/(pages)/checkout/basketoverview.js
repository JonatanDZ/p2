"use client";

import React from "react";

const BasketOverview = () => {
  return (
    <div className="basket-overview">
      <h2>Din Kurv</h2>
      <div className="item-details">
        <h3>BLS</h3>
        <p>Oversize fit | T-shirt | Sort</p>
        <p>?</p>
        <strong>DKK 600</strong>
      </div>

      <div className="selectors">
        <select>
          <option>XL</option>
          <option>L</option>
          <option>M</option>
        </select>
        <input type="number" min="1" max="99" defaultValue="1" className="quantity-input" />
      </div>

      <p className="stock-warning">🟠 Få tilbage</p>
      <a href="#" className="remove-item">Fjern</a>

      <hr />

      <div className="order-summary">
        <h3>Din ordre</h3>
        <p>Total (1 Vare) <span className="total-price">DKK 600</span></p>
      </div>
    </div>
  );
};

export default BasketOverview;
