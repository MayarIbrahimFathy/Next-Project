import './globals.css';
import Script from 'next/script';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Next.js App',
  description: 'A clean and modern Next.js application with Bootstrap',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
} 