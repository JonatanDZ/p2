import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: '1' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
