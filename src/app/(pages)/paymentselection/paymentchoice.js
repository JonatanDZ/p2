"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation"; 
import "../../../styles/paymentselection.css";
import Image from "next/image";
import CheckoutButton from "./approveandpay";

const PaymentSelectionPage = () => {
  const searchParams = useSearchParams(); 
  const totalPrice = parseFloat(searchParams.get("totalPrice")) || 0;
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div>
      <h1>Betaling</h1>


      <form>
        <div className="payment-method">
          <input type="radio" id="card" name="paymentMethod" value="Card" onChange={handlePaymentChange} required />
          <label htmlFor="card">Betalingskort</label>
          <div className="card-icons">
            <Image src="/dankorticon.jpg" alt="Card" width={40} height={30} />
            <Image src="/mastercardicon.jpg" alt="Card" width={40} height={35} />
            <Image src="/visaicon.jpg" alt="Card" width={40} height={25} />
            <Image src="/visaelectronicon.jpg" alt="Card" width={40} height={30} />
          </div>
        </div>
        <div className="payment-method">
          <input type="radio" id="mobilePay" name="paymentMethod" value="MobilePay" onChange={handlePaymentChange} required />
          <label htmlFor="mobilePay">MobilePay</label>
          <div className="mobilepay-icon">
            <Image src="/mobilepayicon.jpg" alt="MobilePay" width={90} height={35} />
          </div>
        </div>
        <div className="payment-method">
          <input type="radio" id="ApplePay" name="paymentMethod" value="ApplePay" onChange={handlePaymentChange} required />
          <label htmlFor="ApplePay">Apple Pay</label>
          <div className="applepay-icon">
            <Image src="/applepayicon.jpg" alt="Apple Pay" width={60} height={50} />
          </div>
        </div>
        <div className="payment-method">
          <input type="radio" id="GooglePay" name="paymentMethod" value="GooglePay" onChange={handlePaymentChange} required />
          <label htmlFor="GooglePay">Google Pay</label>
          <div className="googlepay-icon">
            <Image src="/googlepayicon.jpg" alt="Google Pay" width={50} height={50} />
          </div>
        </div>
        
        
        <CheckoutButton paymentMethod={selectedPaymentMethod} totalPrice={totalPrice} />
      </form>
    </div>
  );
};

export default PaymentSelectionPage;
