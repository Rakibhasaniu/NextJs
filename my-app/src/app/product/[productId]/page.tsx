import { Metadata } from "next";

type Props = {
  params: 
   Promise<{ productId: string}>
  
}

export const generateMetadata = async ({params}: Props):Promise<Metadata> => {
  const productId = (await params).productId;
  return {
    title: `Product ${productId} Details`,
    description: `Details of product with ID ${productId}`,
  };
}
const ProductDetails = async({params}:Props) => {
  const productId = (await params).productId;
  return (

    <div>
      <h1>Product Details for {productId}</h1>
      <h1>This is product details page</h1>
    </div>
  );
};

export default ProductDetails;