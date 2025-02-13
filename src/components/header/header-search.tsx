import { Input } from '../ui/input';

export function HeaderSearch() {
  return (
    <div className='relative w-[800px]'>
      <Input
        placeholder='Search'
        className='text-md w-full rounded-lg border px-4 py-2 placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400'
      />
    </div>
  );
}
