import React from "react";
import Product from "./Product";
import { useProtected } from "../context/userContext";

const AllProducts = () => {
  const { products } = useProtected();
  return (
    <div>
      <div className="flex gap-15 flex-wrap items-center justify-center pt-5 pb-5">
        {products.map((elem) => (
          <Product key={elem.id} elem={elem} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
