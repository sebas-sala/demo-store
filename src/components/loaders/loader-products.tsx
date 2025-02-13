import { Skeleton } from '../ui/skeleton';

export function LoaderProducts() {
  return (
    <ul className='grid grid-cols-3 gap-4'>
      {Array.from({ length: 9 }).map((_, index) => (
        <Skeleton key={index} className='aspect-square' />
      ))}
    </ul>
  );
}
