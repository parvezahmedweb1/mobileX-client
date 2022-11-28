import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/UserContext";
import PhoneCard from "../../Home/PhoneCard/PhoneCard";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://mobilex-server.vercel.app/seller/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, [user?.email]);
  console.log(products);
  return (
    <div className="container mx-auto my-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {products.map((product) => (
          <PhoneCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
