import { ImageProduct } from '@/app/page';
import { getProductsByCategory } from '@/graphql/queries/products';

interface Props {
  params: Promise<{ tag: string }>;
}

export default async function Page({ params }: Readonly<Props>) {
  const tag = (await params).tag;
  const data = await getProductsByCategory(tag);

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
