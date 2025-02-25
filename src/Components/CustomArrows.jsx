import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );
};
