"use client";

import Link from "next/link";
import "../../../styles/paymentfail.css";

export default function CancelPage() {
  return (
    <div className="cancel-container">
      <div className="cancel-card">
        <h1>Betaling afbrudt!</h1>
        <p>Din betaling blev ikke gennemført.</p>
        <p>Hvis dette var en fejl, kan du prøve igen.</p>
        <Link href="/" className={style.home-button}>Tilbage til forsiden</Link>
      </div>
    </div>
  );
}