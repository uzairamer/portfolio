import React from "react";
import ReviewSlider from "../review-slider/review-slider.component";
import ReviewCard from "../review-card/review-card.component";

const Reviews = () => {
  return (
    <section id="reviews" className=" bg-grey-darkest pt-20 pb-20">
      <div className="w-4/5 flex flex-col mx-auto">
        <div className="hero-tagline-border inline-block"></div>
        <h2 className="text-white mt-6 text-3xl font-semibold tracking-wider">
          Reviews
        </h2>
        <h4 className="text-white mt-4 text-xl tracking-wider mb-12">
          Happy Clients
        </h4>
        <div className="xl:ml-10 xl:mr-10">
          <ReviewSlider />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
