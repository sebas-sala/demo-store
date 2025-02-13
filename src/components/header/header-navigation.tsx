import Link from 'next/link';

export function HeaderNavigation() {
  return (
    <nav className='flex items-center gap-4'>
      <Link href='/' className='flex items-center gap-2'>
        <div className='flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            aria-label='Acme Store logo'
            viewBox='0 0 32 28'
            className='h-4 w-4 fill-black dark:fill-white'
          >
            <path d='M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z'></path>
            <path d='M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z'></path>
          </svg>
        </div>
        <div className='text-sm font-semibold uppercase md:hidden lg:block'>
          ACME STORE
        </div>
      </Link>

      <div>
        <ul className='flex gap-4 text-sm'>
          <li>
            <Link href='/search'>All</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
