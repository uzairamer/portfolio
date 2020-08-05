import React from "react";

import "./service-card.css";
import { FaSpider } from "react-icons/fa";
import { BsPhoneLandscape } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { GiTalk } from "react-icons/gi";

import ServiceCard from "../service-card/service-card.component";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-grey-900 pt-20 pb-20 flex flex-col items-center justify-center"
    >
      <div className="w-4/5">
        <div className="hero-tagline-border inline-block"></div>
        <h2 className="text-white mt-6 text-3xl font-semibold tracking-wider">
          Services
        </h2>
        <h4 className="text-white mt-4 text-xl tracking-wider mb-12">
          What can I do for you?
        </h4>
        <div className="services grid gap-4 md:grid-cols-2 xl:grid-cols-3 xxxl:grid-cols-4 lg:gap-5">
          <ServiceCard
            className=""
            title="Website Development"
            description="Conversion-Oriented and Mobile-First Web Application Development"
          >
            <MdWeb className="text-6xl text-yellow-700 mb-2" />
          </ServiceCard>
          <ServiceCard
            className=""
            title="Mobile App Development"
            description="Super fast and smooth development to launch experiences on both Android and iOS"
          >
            <BsPhoneLandscape className="text-6xl text-yellow-700 mb-2" />
          </ServiceCard>
          <ServiceCard
            className=""
            title="Web Scraping"
            description="Enterprise-grade data collection by crawling many layers deep into the Websites"
          >
            <FaSpider className="text-6xl text-yellow-700 mb-2" />
          </ServiceCard>
          <ServiceCard
            className=""
            title="Consultation"
            description="Enterprise solutions for SaaS, ROI and other architectural patterns"
          >
            <GiTalk className="text-6xl text-yellow-700 mb-2" />
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
