import React from "react";
import { useAllProducts } from "../hooks/useProducts";
import { LoaderComponent, ItemListContainer } from "../components";

export const Home = () => {
  const { products, loading, error } = useAllProducts(8);

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>error</div>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};
