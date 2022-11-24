import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../../assets/logo.webp";
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = (
    <>
      <li className=" text-slate-50 delay-100">
        <a href="/home">Home</a>
      </li>
      <li className=" text-slate-50 delay-100">
        <a href="/categories">Categories</a>
      </li>
      <li className=" text-slate-50 delay-100">
        <a href="/blogs">Blogs</a>
      </li>
      <li className=" text-slate-50 delay-100">
        <a href="/about">About</a>
      </li>
      <li className=" text-slate-50 delay-100">
        <a href="/contact">Contact</a>
      </li>
    </>
  );
  return (
    <>
      {/* hamburger menu start */}
      <div onClick={() => setIsOpen(!isOpen)} className="block lg:hidden z-10">
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-gray-800 delay-100 cursor-pointer  " />
        ) : (
          <Bars3Icon className="h-6 w-6 text-gray-800 delay-100 cursor-pointer  " />
        )}
      </div>
      {/* hamburger menu end */}
      {/* nav start */}
      <nav
        onClick={() => setIsOpen(!isOpen)}
        className={
          isOpen
            ? "absolute left-[0] top-0 w-full h-screen text-block container bg-nav py-4 bg-hLink bg-slate-500"
            : "absolute left-[-100%]"
        }
      >
        <img src={logo} alt="" width="115" />
        <ul className="block text-center space-y-4 mt-10">
          {menuItems}
          <button className="bg-primary font-semibold px-10 rounded-full py-2 text-secondary hover:bg-secondary hover:text-white delay-100">
            Sign In
          </button>
        </ul>
        {/* social media */}
        <div className="flex my-10 justify-around">
          <FaFacebook className="text-gray-800 " size={25} />
          <FaInstagram className="text-gray-800 " size={25} />
          <FaGithub className="text-gray-800 " size={25} />
          <FaLinkedinIn className="text-gray-800 " size={25} />
        </div>
      </nav>
      {/* nav end */}
    </>
  );
};

export default NavMobile;
