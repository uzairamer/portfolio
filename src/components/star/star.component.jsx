import React from "react";
import { FaStar, FaStarHalfAlt,  FaRegStar} from "react-icons/fa";

import "./star.css";

export const FullStar = () => {
  return (
    <div className="inline-block text-yellow-600 mr-1">
      <FaStar/>
    </div>
  );
};

export const HalfStar = () => {
  return (
    <div className="inline-block text-yellow-600 mr-1">
      <FaStarHalfAlt/>
    </div>
  );
};

export const EmptyStar = () => {
  return (
    <div className="inline-block text-yellow-600 mr-1">
      <FaRegStar/>
    </div>
  );
};
