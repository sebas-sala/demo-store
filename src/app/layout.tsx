import type { Metadata } from 'next';
import './globals.css';

import { Providers } from './providers';
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
    <html lang='en' className='dark'>
      <body
        className={`bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white`}
      >
        <Providers>
          <Header />
          <main className='container mx-auto py-4'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
