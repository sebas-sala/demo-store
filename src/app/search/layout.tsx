import { Filters } from './components/filters';
import { Collections } from './components/collections';
import { Suspense } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-cols-12'>
      <section className='col-span-3'>
        <Suspense>
          <Collections />
        </Suspense>
      </section>
      <section className='col-span-7'>{children}</section>
      <section className='col-span-2'>
        <Suspense>
          <Filters />
        </Suspense>
      </section>
    </div>
  );
}
