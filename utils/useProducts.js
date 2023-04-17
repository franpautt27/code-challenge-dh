import React, { useState, useEffect } from "react";
import { getProducts } from "../services/products";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  useEffect(() => {
    const loadProducts = async () => {
      const response = await getProducts();
      setProducts(response);
      setProductsLoading(false);
    };
    loadProducts();
  }, []);

  return { products, productsLoading };
};

export default useProducts;
