/* 💡 Example 3: Product conversion with overloading */
interface Product {
  id: string;
  name: string;
}

type ConvertedProduct = Record<`product${Capitalize<keyof Product>}`, string>;

function convertProducts(product: Product): ConvertedProduct;
function convertProducts(products: Product[]): ConvertedProduct[];

function convertProducts(products: Product | Product[]): ConvertedProduct | ConvertedProduct[] {
  if (Array.isArray(products)) {
    return products.reduce((result, { id, name }) => {
      return [
        ...result,
        {
          productId: id,
          productName: name,
        },
      ];
    }, [] as ConvertedProduct[]);
  }

  return {
    productId: products.id,
    productName: products.name,
  };
}

const convertedProduct = convertProducts({ id: '1', name: 'test' });
