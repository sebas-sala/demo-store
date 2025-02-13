import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query Products {
    products {
      edges {
        node {
          id
          name
          thumbnail {
            url
            alt
          }
          category {
            name
          }
          pricing {
            priceRange {
              start {
                gross {
                  amount
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'force-cache',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    return res.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'An unknown error occurred'
    );
  }
};

export const getProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
      { cache: 'force-cache' }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    return res.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'An unknown error occurred'
    );
  }
};
