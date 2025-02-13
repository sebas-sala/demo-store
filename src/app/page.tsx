import { getProducts } from '@/graphql/queries/products';
import Link from 'next/link';

export default async function Home() {
  const data = await getProducts();

  const firstProduct = data[0];

  return (
    <main>
      <section className='mx-auto grid max-w-(--breakpoint-2xl) gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]'>
        <div className='md:col-span-4 md:row-span-2'>
          <ImageProduct product={data[1]} />
        </div>
        <div className='md:col-span-2 md:row-span-1'>
          <ImageProduct product={firstProduct} />
        </div>
        <div className='md:col-span-2 md:row-span-1'>
          <ImageProduct product={data[1]} />
        </div>
      </section>

      <section className='mx-auto max-w-(--breakpoint-2xl) px-4 py-4'>
        <CarouselSpacing products={data} />
      </section>
    </main>
  );
}

import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface CarouselSpacingProps {
  products: {
    id: string;
    title: string;
    image: string;
  }[];
}

export function CarouselSpacing({ products }: CarouselSpacingProps) {
  return (
    <Carousel className='w-full'>
      <CarouselContent className='-ml-1'>
        {products.map((product, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/5'>
            <ImageProduct product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

interface ImageProductProps {
  product: {
    id: string;
    title: string;
    image: string;
  };
}

export function ImageProduct({ product }: ImageProductProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className='relative block aspect-square h-full w-full'
    >
      <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-blue-600 dark:bg-white relative border-neutral-200 dark:border-neutral-800'>
        <img
          src={product.image}
          alt={product.title}
          className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
        />
      </div>
    </Link>
  );
}
