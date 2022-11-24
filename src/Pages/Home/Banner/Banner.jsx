import React from "react";
import { Link } from "react-router-dom";
import hero from "../../../assets/hero-1.png";
import ButtonPrimary from "../../../components/ButtonPrimary";
import "./Banner.css";
const Banner = () => {
  return (
    <section id="" className="h-[90vh] bg-primary banner">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="text-secondary text-center lg:text-left h-full flex justify-center md:justify-center lg:justify-start py-6 md:py-6 lg:py-0 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold">
                Are You Ready For Perfect Phone?
              </h1>
              <p className="my-4 text-slate-700">
                Get Flat 10% Off on all Xiaomi Phones. Use Code MI10
              </p>
              <Link to="/">
                <ButtonPrimary
                  classes={
                    "bg-secondary text-white px-14 py-4 rounded-full hover:text-primary mx-auto lg:mx-0"
                  }
                >
                  Buy Now
                </ButtonPrimary>
              </Link>
            </div>
          </div>
          <div className="md:h-[50vh] lg:h-[90vh] lg:mx-0 mx-auto">
            <img className="h-full object-contain" src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
