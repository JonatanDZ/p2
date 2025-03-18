'use client';

import ProductSideBar from '../../components/ProductSidebar';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Eventpage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);
  return (
    <div style={{ display: 'flex' }}>
<ProductSideBar />
      <div style={{ marginLeft: '220px', marginTop: '30px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {events.map((events) => (
          <Link key={events.id} href={`/events/${events.id}`} passHref>
            <div style={{ border: '1px solid #ccc', padding: '10px', width: '400px', textAlign: 'center' }}>
              <img
                src={events.image}
                alt={events.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <h3>{events.name}</h3>
              <p>{events.info}</p>
              <p>{events.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Eventpage;