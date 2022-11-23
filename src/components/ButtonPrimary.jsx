import React from "react";

const ButtonPrimary = ({ children, classes }) => {
  return (
    <button
      className={`flex items-center font-bold transition-all delay-75 ${classes}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
