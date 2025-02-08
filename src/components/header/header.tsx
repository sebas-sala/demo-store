import { HeaderCart } from './header-card';
import { HeaderSearch } from './header-search';
import { HeaderNavigation } from './header-navigation';

export function Header() {
  return (
    <header className='py-2 px-4 flex justify-between items-center'>
      <HeaderNavigation />
      <HeaderSearch />
      <HeaderCart />
    </header>
  );
}
