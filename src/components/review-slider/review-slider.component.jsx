import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../review-card/review-card.component";

import TasneemImage from "../../assets/images/tasneem.jpg";
import AmmarImage from "../../assets/images/ammar.jpg";
import IbadImage from "../../assets/images/ibad.jpg";
import LauraImage from "../../assets/images/laura.jpg";
import NellakImage from "../../assets/images/nellak.jpg";
import AlexImage from "../../assets/images/alex.jpg";

const ReviewSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <ReviewCard
        imageSrc={AlexImage}
        name="Alex Eastman"
        job="United Kingdom"
        description="I could not recommend Uzair more highly he was highly skilled, helpful and quick to respond. He worked very hard to create what finished as an excellent project. Many thanks. I will certainly use his services again."
      />
      <ReviewCard
        imageSrc={TasneemImage}
        name="Tasneem R."
        job="Jordan"
        description="I'm really happy with Uzair service and work..going through a complete website can be verry difficult however he did a great job..thanks Uzair"
      />
      <ReviewCard
        imageSrc={AmmarImage}
        name="Ammar"
        job="Bahrain"
        description="Excellent work as always with a super fast turnaround"
      />
      <ReviewCard
        imageSrc={LauraImage}
        name="Laura J."
        job="United Kingdom"
        description="Perfect. Always a pleasure working together, thank you!"
      />
      <ReviewCard
        imageSrc={NellakImage}
        name="Nellak"
        job="Australia"
        description="AMAZING work! Worked quickly and efficiently and delivered an outstanding product. Will order again!"
      />
      <ReviewCard
        imageSrc={IbadImage}
        name="Ibad"
        job="United States"
        description="Outstanding Seller! Goes way out of his way to make sure your fully satisfied!"
      />
      
    </Slider>
  );
};

export default ReviewSlider;
