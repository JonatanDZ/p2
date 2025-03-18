"use client";
import React, { useState } from "react";
import CheckoutPage from "./checkoutform";
import BasketOverview from "./basketoverview";

export default function Checkout() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 600;
  const totalPrice = pricePerItem * quantity; 

  return (
    <main className="checkout-container">
      <div className="checkout-container1">
        <CheckoutPage totalPrice={totalPrice} /> 
      </div>
      <div className="checkout-container2">
        <BasketOverview quantity={quantity} setQuantity={setQuantity} totalPrice={totalPrice} /> 
      </div>
    </main>
  );
}

