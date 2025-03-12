'use client';

/* import styles from '../styles/ProductSideBar.module.css'; */
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
    /* <div className={styles.sidenav}>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div> */
  return (
    <div>
      <h1 style={{ fontSize: '36px' }}>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
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