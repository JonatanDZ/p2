import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Laptop', price: '$1200', image: '/img1.jpg' },
  { id: 2, name: 'Phone', price: '$800', image: '/img2.jpg' },
  { id: 3, name: 'Headphones', price: '$200', image: '/img3.jpg' },
  { id: 4, name: 'Laptop', price: '$1200', image: '/img1.jpg' },
  { id: 5, name: 'Phone', price: '$800', image: '/img2.jpg' },
  { id: 6, name: 'Headphones', price: '$200', image: '/img3.jpg' },
  { id: 7, name: 'Laptop', price: '$1200', image: '/img1.jpg' },
  { id: 8, name: 'Phone', price: '$800', image: '/img2.jpg' },
  { id: 9, name: 'Headphones', price: '$200', image: '/img3.jpg' },
  { id: 10, name: 'Laptop', price: '$1200', image: '/img1.jpg' },
  { id: 11, name: 'Phone', price: '$800', image: '/img2.jpg' },
  { id: 12, name: 'Headphones', price: '$200', image: '/img3.jpg' },
  { id: 13, name: 'Laptop', price: '$1200', image: '/img1.jpg' },
  { id: 14, name: 'Phone', price: '$800', image: '/img2.jpg' },
  { id: 15, name: 'Headphones', price: '$200', image: '/img3.jpg' },
  { id: 16, name: 'Laptop', price: '$1200', image: '/img1.jpg' },
  { id: 17, name: 'Phone', price: '$800', image: '/img2.jpg' },
  { id: 18, name: 'Headphones', price: '$200', image: '/img3.jpg' },
  { id: 19, name: 'Laptop', price: '$1200', image: '/img1.jpg' },
  { id: 20, name: 'Phone', price: '$800', image: '/img2.jpg' },
  { id: 21, name: 'Headphones', price: '$200', image: '/img3.jpg' },
  { id: 22, name: 'Laptop', price: '$1200', image: '/img1.jpg' },
  { id: 23, name: 'Phone', price: '$800', image: '/img2.jpg' },
  { id: 24, name: 'Headphones', price: '$200', image: '/img3.jpg' },
];

export async function GET() {
  return NextResponse.json(products);
}
