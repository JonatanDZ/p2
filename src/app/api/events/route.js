import{ NextResponse } from 'next/server';

const events = [
  { id: 1, name: 'event navn her!', info: 'test info about event this could include info and other intersting stuff that might be relevant for a user to read about maybe something about goats', price: 'gratis', image: '/event1.jpg' },
  { id: 2, name: 'event navn her!', info: 'test info about event this could include info and other intersting stuff that might be relevant for a user to read about maybe something about goats', price: '100kr', image: '/event2.jpg' },
  { id: 3, name: 'event navn her!', info: 'test info about event this could include info and other intersting stuff that might be relevant for a user to read about maybe something about goats', price: '20kr', image: '/event3.jpg' },
  { id: 4, name: 'event navn her!', info: 'test info about event this could include info and other intersting stuff that might be relevant for a user to read about maybe something about goats', price: '15kr', image: '/event1.jpg' },
  { id: 5, name: 'event navn her!', info: 'test info about event this could include info and other intersting stuff that might be relevant for a user to read about maybe something about goats', price: 'gratis', image: '/event2.jpg' },
  { id: 6, name: 'event navn her!', info: 'test info about event this could include info and other intersting stuff that might be relevant for a user to read about maybe something about goats', price: '80kr', image: '/event3.jpg' },
];

export async function GET() {
  return NextResponse.json(events);
}