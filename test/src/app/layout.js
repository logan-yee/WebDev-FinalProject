import { Inter } from 'next/font/google'
import localFont from "next/font/local";
import Navbar from './components/navbar';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Naan Stop Wok - Asian Fusion Restaurant',
  description: 'Experience the perfect blend of Asian cuisines at Naan Stop Wok. Fresh, delicious, and made with love.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-amber-50 text-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

