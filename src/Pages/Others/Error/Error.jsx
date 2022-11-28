import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../../assets/404.gif";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="container mx-auto">
      <div className="flex flex-col min-h-[400px] justify-center items-center p-4">
        <img src={errorImg} alt="" />
        <br />
        {error && (
          <div className="text-center bg-nav text-white px-40 py-6 rounded-lg">
            <p className="text-2xl text-red-500">
              {error.statusText || error.message}
            </p>
            <p className="text-4xl text-red-500">{error.status}</p>
          </div>
        )}
        <Link to="/">
          <button className="w-full tracking-wider px-12 font-bold py-3 mt-6 text-sm bg-btnHover text-nav uppercase transition-colors duration-300 transform bg-link rounded-md lg:w-auto hover:bg-option1 hover:text-black focus:outline-none">
            Go Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
