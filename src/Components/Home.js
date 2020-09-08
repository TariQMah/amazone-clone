import React, { useState, useEffect } from "react";

import Product from "./Product";
import Banner from "./Banner";
function Home() {
  const [hasError, setErrors] = useState(false);
  const [products, setProducts] = useState([]);
  const [starRating, setStarRating] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      res
        .json()
        .then((res) => setProducts(res))
        .catch((err) => setErrors(err));
    }
    setStarRating(Math.floor(Math.random() * 10));
    fetchData();
  }, []);
  console.log(products);
  return (
    <div className="home">
      <Banner />
      <div className="home__row">
        {products?.slice(0, 2).map((item, key) => (
          <Product
            key={item.id}
            id={item.id}
            rating={starRating}
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <div className="home__row">
        {products?.slice(3, 6).map((item, key) => (
          <div>
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              rating={Math.floor(Math.random() * 5)}
              image={item.image}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>
      <div className="home__row">
        {products?.slice(6, 8).map((item, key) => (
          <Product
            key={item.id}
            id={item.id}
            key={key}
            title={item.title}
            rating={Math.floor(Math.random() * 5)}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
