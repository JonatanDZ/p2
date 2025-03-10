"use client";

import React, { useState } from 'react';
import "../../../styles/paymentselection.css";

const PaymentSelectionPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected payment method: ${selectedPaymentMethod}`);
  
    fetch('/api/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ paymentMethod: selectedPaymentMethod })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Payment successful!');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
  };

  return (
    <div>
      <h1>Betaling</h1>
      <form onSubmit={handlePaymentSubmit}>
        <div className="payment-method">
          <input type="radio" id="card" name="paymentMethod" value="Card" onChange={handlePaymentChange} required />
          <label htmlFor="card">Betalingskort</label>
          <div>ICON</div>
        </div>
        <div className="payment-method">
          <input type="radio" id="mobilePay" name="paymentMethod" value="MobilePay" onChange={handlePaymentChange} required />
          <label htmlFor="mobilePay">MobilePay</label>
          <div>ICON</div>
        </div>
        <div className="payment-method">
          <input type="radio" id="Apple Pay" name="paymentMethod" value="Apple pay" onChange={handlePaymentChange} required />
          <label htmlFor="Apple pay">Apple Pay</label>
          <div>ICON</div>
        </div>
        <div className="payment-method">
          <input type="radio" id="Google Pay" name="paymentMethod" value="Google pay" onChange={handlePaymentChange} required />
          <label htmlFor="Google Pay">Google Pay</label>
          <div>ICON</div>
        </div>
        <button type="submit">Godkend og betal</button>
      </form>
    </div>
    
  );
};

export default PaymentSelectionPage;