
const ProductReview =async ({params}:{params: Promise<{productId: string, reviewId:string}>}) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h1>
        Product Review for Product ID: {productId} and Review ID: {reviewId}
      </h1>
    </div>
  );
};

export default ProductReview;