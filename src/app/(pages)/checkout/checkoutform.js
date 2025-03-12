"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../../../styles/checkout.css";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    Fornavn: '',
    Efternavn: '',
    Addresse: '',
    Postnummer: '',
    By: '',
    Land: '',
    Email: '',
    Bekræftemail: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/paymentselection');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fornavn:</label>
          <input type="text" name="Fornavn" value={formData.Fornavn} onChange={handleChange} required />
        </div>
        <div>
          <label>Efternavn:</label>
          <input type="text" name="Efternavn" value={formData.Efternavn} onChange={handleChange} required />
        </div>
        <div>
          <label>Addresse:</label>
          <input type="text" name="Addresse" value={formData.Addresse} onChange={handleChange} required />
        </div>
        <div>
          <label>Postnummer:</label>
          <input type="text" name="Postnummer" value={formData.Postnummer} onChange={handleChange} required />
        </div>
        <div>
          <label>By:</label>
          <input type="text" name="By" value={formData.By} onChange={handleChange} required />
        </div>
        <div>
          <label>Land:</label>
          <input type="text" name="Land" value={formData.Land} onChange={handleChange} required />
        </div>
        <div>
          <label>E-mail:</label>
          <input type="email" name="Email" value={formData.Email} onChange={handleChange} required />
        </div>
        <div>
          <label>Bekræft e-mail:</label>
          <input type="email" name="Bekræftemail" value={formData.Bekræftemail} onChange={handleChange} required />
        </div>
        <button type="submit">Fortsæt til betaling</button>
      </form>
    </div>

  );
};

export default CheckoutPage;