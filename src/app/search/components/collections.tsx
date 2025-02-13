'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { CollectionItem } from './collection-item';

export function Collections({ categories }: { categories: string[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams().toString();

  const collections = [
    {
      name: 'All',
      href: '/search',
    },
    ...categories.map((category) => ({
      name: category.charAt(0).toUpperCase() + category.slice(1),
      href: `/search/${category}`,
    })),
  ];

  return (
    <nav className='space-y-2'>
      <h3 className='text-xs'>Collections</h3>
      <ul className='space-y-1 text-sm'>
        {collections.map((collection) => (
          <CollectionItem
            key={collection.name}
            collection={collection}
            pathname={pathname}
            searchParams={searchParams}
          />
        ))}
      </ul>
    </nav>
  );
}
