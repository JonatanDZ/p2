'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const EventsDetail = () => {
  const params = useParams();
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEventsDetails = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      const foundEvents = data.find((p) => p.id.toString() === params.id);
      setEvents(foundEvents || null);
    };

    fetchEventsDetails();
  }, [params.id]);

  if (!events) {
    return <div>Vent venligst...</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <img 
        src={events.image} 
        alt={events.name} 
        style={{ width: '500px', height: '500px', objectFit: 'cover', display: 'block', margin: '0 auto' }} 
      />
      <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}> {events.name}</h1>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{events.info}</p>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{events.price}</p>
    </div>
  );
};

export default EventsDetail;
