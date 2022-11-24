import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const { images, bgColor, categoriesId } = category;
  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className="rounded-xl w-full mx-auto py-4"
    >
      <div className="text-center">
        <img className="block mx-auto" src={images} alt="" />
        <Link to={`/category/${categoriesId}`}>
          <button className="mt-4 bg-white text-secondary hover:bg-secondary hover:text-white px-8 py-2 font-semibold rounded-full">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesCard;
