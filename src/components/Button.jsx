import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition">
      {title}
    </button>
  );
};

export default Button;
