import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'DesiBhabi – Adult Content Platform',
  description: 'Watch hot desi videos online. Fully SEO-optimized adult content platform.',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
