import React from "react";
import { FaQuoteRight } from "react-icons/fa";

import "./review-card.css";


const ReviewCard = (props) => {
  const { imageSrc, name, job, description } = props;

  return (
    <div className="w-full xl:h-64 border-l-4 review-card bg-grey-900">
      <div className="flex flex-col px-10 py-8">
        <div className="flex justify-between border-b-2 border-grey-darker pb-4">
          <div className="flex">
            <img
              className="object-contain object-center h-24 rounded-full border-2 border-grey-800"
              src={imageSrc}
              alt="Reviewr's Avatar"
            />
            <div className="flex flex-col justify-center ml-3">
              <p className="w-64 font-semibold text-white uppercase">{name}</p>
              <p className="font-semibold text-sm gold-gradient-text ">
                {job}
              </p>
            </div>
          </div>
          <FaQuoteRight className="text-6xl text-grey-darkest" />
        </div>
        <p className="mt-6 text-grey-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
