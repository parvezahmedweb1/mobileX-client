import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner";
import CategoriesCard from "../../Others/CategoriesCard/CategoriesCard";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios.get("https://mobilex-server.vercel.app/categories").then((res) => {
      setCategories(res.data.data);
      setLoading(false);
    });
  }, []);
  return (
    <section className="container mx-auto my-16">
      <h2 className="text-3xl font-semibold text-secondary mb-8">
        Good things are waiting for you
      </h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <CategoriesCard key={category._id} category={category} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Categories;
