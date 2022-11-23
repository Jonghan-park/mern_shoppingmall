import React, { useState } from "react";
import data from "../data";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
