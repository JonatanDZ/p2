"use client";

import React, { useState } from "react";

const BasketOverview = () => {
  const [quantity, setQuantity] = useState(1); 
  const [isEmpty, setIsEmpty] = useState(false); 
  const pricePerItem = 600;

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleRemoveItem = () => {
    setIsEmpty(true); 
  };

  return (
    <div className="basket-overview">
      <h2>Din Kurv</h2>

      {isEmpty ? (
        <p className="empty-cart">Kurven er tom</p> 
      ) : (
        <>
          <div className="item-details">
            <h3>BLS</h3>
            <p>Oversize fit | T-shirt | Sort</p>
            <strong>DKK {pricePerItem * quantity}</strong>
          </div>

          <div className="selectors">
            <select>
              <option>XL</option>
              <option>L</option>
              <option>M</option>
            </select>
            <input
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={handleQuantityChange}
              className="quantity-input"
            />
          </div>

          <p className="stock-warning">🟠 Få tilbage</p>
          <a href="#" className="remove-item" onClick={handleRemoveItem}>
            Fjern
          </a>

          <hr />
        </>
      )}

      <div className="order-summary">
        <h3>Din ordre</h3>
        <p>
          Total ({isEmpty ? "0" : quantity} Vare){" "}
          <span className="total-price">
            DKK {isEmpty ? "0" : pricePerItem * quantity}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BasketOverview;
