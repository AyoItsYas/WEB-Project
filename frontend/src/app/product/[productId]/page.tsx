import type { Product } from '../../../../types';

export default async function Page({ params }: { params: { productId: string } }) {
  const data : [Product] = await fetch('/api/products.json').then((res) => res.json())

  const product = data.find((product) => product.id === params.productId.to)

  return (
  <div>
    <table>
      <tr>
        <td>Product ID</td>
        <td>{params.productId}</td>
      </tr>
      <tr>
        <td>Product Name</td>
        <td>BTS Dynamite T-Shirt</td>
      </tr>
      <tr>
        <td>Product Price</td>
        <td>29.99</td>
      </tr>
      <tr>
        <td>Product Description</td>
        <td>This is a BTS Dynamite T-Shirt</td>
      </tr>

    </table>
  </div>
  );
}

export async function generateStaticParams() {
  const data = await fetch('/api/products.json').then((res) => res.json())

  return data.map((product) => ({
      productId: product.id,
  }))
}