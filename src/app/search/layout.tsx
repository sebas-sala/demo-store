import { Filters } from './components/filters';
import { Collections } from './components/collections';
import { Suspense } from 'react';
import { getCategories } from '@/graphql/queries/categories';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategories();

  return (
    <div className='grid grid-cols-12'>
      <section className='col-span-1'>
        <Suspense>
          <Collections categories={categories} />
        </Suspense>
      </section>
      <section className='col-span-10 px-10'>{children}</section>
      <section className='col-span-1'>
        <Suspense>
          <Filters />
        </Suspense>
      </section>
    </div>
  );
}
