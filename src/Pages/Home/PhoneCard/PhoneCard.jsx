import React from "react";
import ButtonPrimary from "../../../components/ButtonPrimary";

const PhoneCard = () => {
  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
      <img
        alt="Home"
        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full rounded-md object-cover"
      />
      <div className="mt-2 text-xl text-secondary font-bold">
        <h4>Wallaby Avenue, Park Road</h4>
      </div>
      <div className="mt-2">
        <div className="mt-2 flex items-center justify-between gap-8 text-xs">
          <div className="flex items-center space-x-2">
            <div>
              <dd className="text-secondary font-bold text-3xl">$140</dd>
            </div>
            <div>
              <dd className="text-sm text-gray-500 line-through">240</dd>
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
            <dd className="text-sm">Condition: pre-owned</dd>
          </div>
          <div>
            <dd className="text-sm">Location: Satirpara, Narsingdi.</dd>
          </div>
          <div>
            <dd className="text-sm">Uses: 1 years</dd>
          </div>
          <div>
            <dd className="text-sm">Post Time: 2 din</dd>
          </div>
        </dl>
      </div>
      <div>
        <ButtonPrimary
          classes={
            "bg-secondary text-primary py-4 mx-auto px-28 rounded-full mt-4 text-center block"
          }
        >
          Buy Now
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default PhoneCard;
