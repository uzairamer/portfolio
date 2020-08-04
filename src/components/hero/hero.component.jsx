import React from "react";
import TypeIt from "typeit-react";

import "./hero.css";
import Button from "../button/button.component";

const Hero = () => {
  return (
    <div className="w-full hero-height relative flex overflow-hidden bg-grey-900 hero-image">
      <div className="w-4/5 mx-auto text-white flex flex-col justify-center mb-8">
        <div>
          <h2 className="tracking-wider text-xl md:text-2xl">Hello, My name is</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider">Uzair Amer</h1>
        </div>
        <div
          id="hero-developer-text"
          className="text-2xl md:text-4xl font-semibold tracking-wide"
        >
          <div className="hero-tagline-border inline-block"></div>
          <TypeIt
            className="mt-5 w-full"
            element={"h3"}
            options={{ loop: true }}
            getBeforeInit={(instance) => {
              instance
                .type("I'm a Full-Stack Developer")
                .pause(750)
                .delete(20)
                .type("Creative Freelancer")
                .pause(750)
                .delete(21)
                .type("an Author");
              return instance;
            }}
          />
        </div>
        <Button className="mt-10 w-40" text="Know More" href={"#about-me"} />
      </div>
    </div>
  );
};

export default Hero;
