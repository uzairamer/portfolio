import React from "react";

import "./technology-card.css";
import { FaReact } from "react-icons/fa";

const TechnologyCard = (props) => {
  const { children, className } = props;
  return (
    <div
      className={`bg-grey-900 flex flex-col items-center py-4 px-12 rounded-lg shadow-2xl ${className} `}
    >
      {children}
    </div>
  );
};

export default TechnologyCard;
