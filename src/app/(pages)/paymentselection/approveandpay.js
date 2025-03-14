"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutButton({ paymentMethod, totalPrice }) {
  const [loading, setLoading] = useState(false);

  const formattedPrice = Math.round((totalPrice || 0) * 100); // Convert DKK to cents/øre

  const cart = [{ name: "BLS Oversize T-shirt", price: formattedPrice, quantity: 1 }];

  const handleCheckout = async () => {
    if (!paymentMethod) {
      alert("Vælg en betalingsmetode først.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, paymentMethod }),
      });

      const data = await response.json();

      console.log("Stripe API Response:", data); 

      if (!response.ok) {
        throw new Error(data.error || "Noget gik galt!");
      }


      if (data.url) {
        console.log("Redirecting to Stripe:", data.url);
        window.location.href = data.url;
      } else {
        alert("Fejl: Mangler session URL!");
      }
      
    } catch (error) {
      console.error("Betalingsfejl:", error);
      alert(`Fejl: ${error.message}`);
    } finally {
      setLoading(false);
    }
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
