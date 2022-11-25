import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryPhone = () => {
  const { id } = useParams();
  useEffect(() => {}, []);
  return (
    <div className="container mx-auto my-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1"></div>
    </div>
  );
};

export default CategoryPhone;
