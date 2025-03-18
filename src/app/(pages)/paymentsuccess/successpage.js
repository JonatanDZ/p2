"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../styles/paymentsuccess.css";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/stripe/paymentsession?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setSession(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching session:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>Betaling gennemført!</h1>
        {loading ? (
          <p>Henter betalingsoplysninger...</p>
        ) : session ? (
          <div className="success-details">
            <p>Tak for din betaling! 🎉</p>
            <p className="order-id-container">Ordre ID:</p> 
            <p className="order-id-value">{session.id}</p>
            <p><strong>Beløb:</strong> {session.amount_total / 100} DKK</p>
            <p><strong>Betalingsstatus:</strong> {session.payment_status}</p>
          </div>
        ) : (
          <p>Kunne ikke finde betalingsoplysninger.</p>
        )}
        <Link href="/" className={style.home-button}>Tilbage til forsiden</Link>

      </div>
    </div>
  );
}
