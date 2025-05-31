import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'DesiBhabi – Adult Content Platform',
  description: 'Watch hot desi videos online. Fully SEO-optimized adult content platform.',
  name: "6a97888e-site-verification", content: "9ec7ad82c743680208838033783755bb"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="6a97888e-site-verification" content="9ec7ad82c743680208838033783755bb"></meta>
      </head>
      <body className="">
       <iframe src="//a.magsrv.com/iframe.php?idzone=5626584&size=300x250" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
        <Navbar />
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
