import { Filters } from './components/filters';
import { Collections } from './components/collections';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-cols-12'>
      <section className='col-span-3'>
        <Collections />
      </section>
      <section className='col-span-7'>{children}</section>
      <section className='col-span-2'>
        <Filters />
      </section>
    </div>
  );
}
