export default function Page({ params }: { params: { productId: string } }) {
  return <div>
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
  </div>;
}