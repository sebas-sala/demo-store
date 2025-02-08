'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import { FilterItem } from './filter-item';

const filters = [
  { name: 'Relevance', sort: '' },
  { name: 'Trending', sort: 'trending-desc' },
  { name: 'Latest arrivals', sort: 'latest-desc' },
  { name: 'Price: Low to High', sort: 'price-asc' },
  { name: 'Price: High to Low', sort: 'price-desc' },
];

export function Filters() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <nav className='space-y-2'>
      <h3 className='text-xs'>Sort by</h3>
      <ul className='space-y-1 text-sm'>
        {filters.map((filter) => (
          <FilterItem
            key={filter.name}
            filter={filter}
            pathname={pathname}
            searchParams={searchParams}
          />
        ))}
      </ul>
    </nav>
  );
}
