
const Review = async({params}:{params: Promise<{productId:string}>}) => {
  const { productId } = await params;
  console.log("🚀 ~ Review ~ productId:", productId)
  return (
    <div>
      <h1>Make a product review</h1>
      <h2>Product ID: {productId}</h2>
      <p>Write your review here...</p>
      <textarea rows={5} cols={50} placeholder="Enter your review"></textarea>
      <br />
      <button type="submit">Submit Review</button>
      <h2>Reviews:</h2>
      <ul>
        <li>Review 1 for Product {productId}</li>
        <li>Review 2 for Product {productId}</li>
        <li>Review 3 for Product {productId}</li>
      </ul>
      <p>Note: This is a static review page for product {productId}.</p>
      <p>Reviews are not stored in a database.</p>
    </div>
  );
};

export default Review;