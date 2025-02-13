import { getProducts } from '@/graphql/queries/products';
import { ImageProduct } from '../page';

export default async function Home() {
  const data = await getProducts();

  return (
    <ul className='grid grid-cols-3 gap-4'>
      {data.map((product, index) => (
        <li
          key={index}
          className='aspect-square transition-opacity animate-fadeIn'
        >
          <ImageProduct product={product} />
        </li>
      ))}
    </ul>
  );
}
