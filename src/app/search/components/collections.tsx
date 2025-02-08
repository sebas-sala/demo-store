'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { CollectionItem } from './collection-item';

const collections = [
  { name: 'All', href: '/search' },
  { name: 'Bags', href: '/search/bags' },
  { name: 'Drinkware', href: '/search/drinkware' },
  { name: 'Electronics', href: '/search/electronics' },
  { name: 'Footwear', href: '/search/footwear' },
  { name: 'Headwear', href: '/search/headwear' },
  { name: 'Hoodies', href: '/search/hoodies' },
  { name: 'Jackets', href: '/search/jackets' },
  { name: 'Kids', href: '/search/kids' },
  { name: 'Pets', href: '/search/pets' },
  { name: 'Shirts', href: '/search/shirts' },
  { name: 'Stickers', href: '/search/stickers' },
];

export function Collections() {
  const pathname = usePathname();
  const searchParams = useSearchParams().toString();

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
