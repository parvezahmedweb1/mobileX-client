import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import BookingModal from "../BookingModal/BookingModal";
import PhoneCard from "../PhoneCard/PhoneCard";

const CategoryPhone = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://mobilex-server.vercel.app/products/${id}`)
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      });
  }, [id]);
  const [booking, setBooking] = useState(null);
  return (
    <div className="container mx-auto mt-6 mb-20">
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {products.map((product) => (
            <PhoneCard
              key={product._id}
              product={product}
              setBooking={setBooking}
            />
          ))}
        </div>
      )}
      {/*  {products.map((product) => (
        
      ))} */}
      {<BookingModal booking={booking}></BookingModal>}
    </div>
  );
};

export default CategoryPhone;
