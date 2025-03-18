/*
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      const foundProduct = data.find((p) => p.id.toString() === params.id);
      setProduct(foundProduct || null);
    };

    fetchProductDetails();
  }, [params.id]);

  if (!product) {
    return <div>Vent venligst...</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '500px', height: '500px', objectFit: 'cover', display: 'block', margin: '0 auto' }} 
      />
      <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}> {product.name}</h1>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{product.price}</p>
    </div>
  );
};

export default ProductDetail;
*/