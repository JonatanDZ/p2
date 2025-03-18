"use client";

import React, { useState } from "react";  
import { useRouter } from "next/navigation"; 

const BasketOverview = ({ quantity, setQuantity, totalPrice }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const router = useRouter(); 

  const handleQuantityChange = (e) => {
    let newQuantity = parseInt(e.target.value, 10);
    if (isNaN(newQuantity) || newQuantity < 1) {
      newQuantity = 1;
    } else if (newQuantity > 99) {
      newQuantity = 99;
    }
    setQuantity(newQuantity);
  };

  const handleRemoveItem = () => {
    setIsEmpty(true);
    setQuantity(1);
  };

  const handleGoToPayment = () => {
    router.push(`/paymentselection?totalPrice=${totalPrice}`);
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
            <strong>DKK {totalPrice}</strong> 
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
          <span className="total-price">DKK {totalPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default BasketOverview;
