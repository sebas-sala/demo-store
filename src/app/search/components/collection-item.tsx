import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  collection: { name: string; href: string };
  pathname: string;
  searchParams: string;
}

export function CollectionItem({
  collection,
  pathname,
  searchParams,
}: Readonly<Props>) {
  const { name, href } = collection;

  const isActive = pathname.includes(name.toLowerCase());

  const newHref = `${href}?${searchParams}`;

  return (
    <li
      key={name}
      className={cn(
        'text-sm hover:underline underline-offset-4',
        isActive && 'underline'
      )}
    >
      <Link href={newHref}>{name}</Link>
    </li>
  );
}
