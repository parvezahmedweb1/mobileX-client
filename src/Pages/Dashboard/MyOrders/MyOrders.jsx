import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/UserContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://mobilex-server.vercel.app/bookings/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, [user.email]);
  console.log(products);
  return (
    <div className="container mx-auto my-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {products.map((product) => (
          <article class="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm">
            <div class="rounded-[10px] text-center bg-white p-4  sm:p-6">
              <p>
                <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
              </p>
              <p>
                <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                  {product.price}
                </h3>
              </p>

              <div className="text-center border rounded-md">
                <h4>{product.customerName}</h4>
                <p>{product?.email}</p>
                <p>{product.phone}</p>
                <p>{product.location}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
