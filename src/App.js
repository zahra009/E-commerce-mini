import React, { useState, useEffect } from "react";
import Product from "./Components/Product";
import axios from "axios";

import "./App.css";

const baseUrl = "https://fakestoreapi.com/products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
