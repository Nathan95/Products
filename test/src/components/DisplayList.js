import React, { useEffect, useState } from "react";

import Items from "./Items";

const DisplayList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState({});

  async function fetchProducts() {
    const res = await fetch("http://www.mocky.io/v2/5c62e7c33000004a00019b05/");

    res
      .json()
      .then(res => setProducts(res))

      .catch(err => setError(err));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) return <div>Something went wrong</div>;

  let transactions = products.transactions;

  return <Items rows={transactions} />;
};

export default DisplayList;
