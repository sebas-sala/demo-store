import type { Metadata } from 'next';
import './globals.css';

import { Header } from '@/components/header/header';

export const metadata: Metadata = {
  title: 'Demo Store',
  description: 'A demo store built with Next.js and Shopify',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <Header />
        <main className='container mx-auto py-4'>{children}</main>
      </body>
    </html>
  );
}
