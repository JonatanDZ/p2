import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#f0f0f0' }}>
      <Link href="/">Home</Link>
      <Link href="/landing">Landing</Link>
    </nav>
  );
}
