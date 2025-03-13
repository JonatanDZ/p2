'use client';

import ProductSideBar from '../../components/ProductSidebar';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <div style={{ display: 'flex' }}>
<ProductSideBar />
      <div style={{ marginLeft: '220px', marginTop: '30px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} passHref>
            <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px', textAlign: 'center' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;