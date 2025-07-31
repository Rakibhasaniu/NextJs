import Link from "next/link";

const ProductList = () => {
  const productId=100;
  return (
    <div>
      <h1>Product List</h1>
      <h2>
        <Link href="/product/1">
        Product 1
        </Link>
        </h2>
      <h2><Link href="/product/1">Product 2</Link></h2>
      <h2><Link href="/product/1">Product 3</Link></h2>
      <h2><Link href={`/product/${productId}`}>Product {productId}</Link></h2>
    </div>
  );
};

export default ProductList;