"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function CheckoutButton({ paymentMethod, totalPrice }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const cart = [
    { name: "BLS Oversize T-shirt", price: totalPrice * 100, quantity: 1 }, // Stripe bruger cents som pris
  ];

  const handleCheckout = async () => {
    if (!paymentMethod) {
      alert("Vælg en betalingsmetode først.");
      return;
    }

    setLoading(true);

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, paymentMethod }),
    });

    const { sessionId } = await response.json();
    if (sessionId) {
      router.push(`https://checkout.stripe.com/pay/${sessionId}`);
    } else {
      alert("Betalingsfejl");
    }

    setLoading(false);
  };

  return (
    <button 
      type="button"
      onClick={handleCheckout} 
      disabled={loading}
      className="checkout-button"
      >
      {loading ? (
        <div className="button-content">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
          </svg>
          Behandler...
        </div>
      ) : (
        `Godkend og betal DKK ${totalPrice || 0}`
      )}
    </button>
  );
}
