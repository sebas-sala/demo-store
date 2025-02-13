export const getCategories = async (): Promise<string[]> => {
  try {
    const res = await fetch('https://fakestoreapi.com/products/categories');

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
