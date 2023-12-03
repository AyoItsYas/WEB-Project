import Image from 'next/image';

import type { Product } from '../../../../../types';

export default async function Page({ params }: { params: { productId: string } }) {
  const data : Array<Product> = await fetch('http://localhost:3000/api/products.json').then((res) => res.json()).then((res) => res.data)

  const product = data.find((product) => product.id.toString() === params.productId);

  if (product) {
    return (
      <div>
        <h1>{product.name}</h1>

        <Image src={product.image} width={300} height={300} alt={product.name} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }
}