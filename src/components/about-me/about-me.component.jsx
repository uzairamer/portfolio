import React from "react";
import Particles from "react-particles-js";

import "./about-me.css";
import AboutMeIsometric from "../../assets/images/coding.png";

import { FullStar, HalfStar, EmptyStar } from "../star/star.component";
import TechnologyCard from "../technology-card/techonology-card.component";
import Button from "../button/button.component";

import { FaReact, FaSpider, FaPython, FaHtml5, FaCcStripe } from "react-icons/fa";
import { DiDjango, DiFirebase } from "react-icons/di";
import { RiFlutterLine } from "react-icons/ri";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="bg-grey-800 flex flex-col items-center justify-center relative pt-20 pb-20"
    >
      <Particles
        className="absolute w-full h-full"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div className="w-4/5 grid xxl:grid-cols-2 grid-cols-1 z-10" id="about-me-inner">
        <div className="aboutme-image-area flex justify-center">
          <div>
            <img
              src={AboutMeIsometric}
              className="w-auto"
              id="about-me-image"
              alt="App Development"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="hero-tagline-border inline-block"></div>
          <h2 className="text-white mt-6 text-3xl font-semibold tracking-wider">
            About Me
          </h2>
          <div className="mt-6 text-md w-4/5 text-grey-400 xsm:w-full">
            <p>
              I'm a Techonoly-Agnostic Developer based in Lahore, Pakistan 🇵🇰
              and I'm very confident in the work I do. With over 4 years of
              experience in software development and freelancing, I have
              enterprise-level tools in my arsenal to build the right product
              for you.
            </p>
            <br />
            <p>Currently, I'm focusing on the following technologies</p>
            <Button
              className="mt-10 xsm:mb-10 w-40 text-white"
              text="See More"
              href={"#services"}
            />
          </div>
        </div>
      </div>
      <div className="w-4/5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 xxl:grid-cols-4 xxxl:grid-cols-6 xl:gap-10 text-white z-10">
        <TechnologyCard className="">
          <FaHtml5 className="text-6xl" />
          <h3 className="mt-2 font-semibold tracking-wider">HTML/CSS</h3>
          <div className="">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
          </div>
        </TechnologyCard>
        <TechnologyCard className="">
          <FaReact className="text-6xl" />
          <h3 className="mt-2 font-semibold tracking-wider">ReactJS</h3>
          <div className="">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <EmptyStar />
          </div>
        </TechnologyCard>
        <TechnologyCard className="">
          <DiDjango className="text-6xl" />
          <h3 className="mt-2 font-semibold tracking-wider">Django</h3>
          <div className="">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <EmptyStar />
          </div>
        </TechnologyCard>
        <TechnologyCard className="">
          <FaSpider className="text-6xl" />
          <h3 className="mt-2 font-semibold tracking-wider">Scrapy</h3>
          <div className="">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
          </div>
        </TechnologyCard>
        <TechnologyCard className="">
          <RiFlutterLine className="text-6xl" />
          <h3 className="mt-2 font-semibold tracking-wider">Flutter</h3>
          <div className="mt-2">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </div>
        </TechnologyCard>
        <TechnologyCard className="">
          <FaPython className="text-6xl" />
          <h3 className="mt-2 font-semibold tracking-wider">Python</h3>
          <div className="mt-2">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </div>
        </TechnologyCard>
        <TechnologyCard className="">
          <DiFirebase className="text-6xl" />
          <h3 className="mt-2 font-semibold tracking-wider">Firebase</h3>
          <div className="mt-2">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </div>
        </TechnologyCard>
        <TechnologyCard className="">
          <FaCcStripe className="text-6xl" />
          <h3 className="mt-2 font-semibold tracking-wider">Stripe</h3>
          <div className="mt-2">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </div>
        </TechnologyCard>
      </div>
    </section>
  );
};

export default AboutMe;
