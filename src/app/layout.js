import { Playwrite_CU } from 'next/font/google';
import "./globals.css";

const pw = Playwrite_CU({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: "Devember",
  description: "A bit like Inktober, but with a keyboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <body
        className={`flex justify-center items-center py-2 ${pw.className} antialiased text-white h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
