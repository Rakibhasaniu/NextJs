"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handleOrder = () => {
    // Logic to handle the order
    console.log("Order placed successfully!");
    router.push("/"); // Redirect to a success page
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleOrder} >Order Now</button>
    </div>
  );
};

export default OrderProduct;