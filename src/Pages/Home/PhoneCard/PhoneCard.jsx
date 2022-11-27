import React from "react";

const PhoneCard = ({ product, setBooking }) => {
  const { name, img, price, oldPrice, condition, location, uses, time } =
    product;
  return (
    <div className="block rounded-lg p-4 shadow-lg shadow-indigo-100">
      <img alt="Home" src={img} className="w-full rounded-md" />
      <div className="mt-2 text-xl text-secondary font-bold">
        <h4 className="text-center">{name}</h4>
      </div>
      <div className="mt-2">
        <div className="mt-2 flex items-center justify-between gap-8 text-xs">
          <div className="flex items-center space-x-2">
            <div>
              <dd className="text-secondary font-bold text-3xl">${price}</dd>
            </div>
            <div>
              <dd className="text-sm text-gray-500 line-through">{oldPrice}</dd>
            </div>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <p className="text-gray-500">Parking</p>
            </div>
          </div>
        </div>
        <dl className="text-center">
          <div>
            <dd className="text-sm">Seller: Parvez</dd>
          </div>
          <div>
            <dd className="text-sm">Condition: {condition}</dd>
          </div>
          <div>
            <dd className="text-sm">Location: {location}</dd>
          </div>
          <div>
            <dd className="text-sm">Uses: {uses}</dd>
          </div>
          <div>
            <dd className="text-sm">Post Time: {time}</dd>
          </div>
        </dl>
      </div>
      <label
        onClick={() => setBooking(product)}
        htmlFor="booking-modal"
        className="btn w-full mt-4"
      >
        Buy Now
      </label>
    </div>
  );
};

export default PhoneCard;
