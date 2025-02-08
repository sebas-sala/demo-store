import { cn } from '@/lib/utils';
import Link from 'next/link';

interface FilterItemProps {
  pathname: string;
  searchParams: URLSearchParams;
  filter: { name: string; sort: string };
}

export function FilterItem({
  filter,
  pathname,
  searchParams,
}: Readonly<FilterItemProps>) {
  const newSearchParams = new URLSearchParams(searchParams.toString());

  if (filter.sort) {
    newSearchParams.set('sort', filter.sort);
  } else {
    newSearchParams.delete('sort');
  }

  const isActive =
    filter.sort === searchParams.get('sort') ||
    (filter.sort === '' && searchParams.get('sort') === null);

  const href = `${pathname}?${newSearchParams.toString()}`;

  return (
    <li
      key={filter.name}
      className={cn(
        'text-sm hover:underline underline-offset-4',
        isActive && 'text-black underline'
      )}
    >
      <Link href={href}>{filter.name}</Link>
    </li>
  );
}
