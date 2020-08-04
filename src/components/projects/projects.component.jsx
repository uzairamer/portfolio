import React from "react";
import ProjectCard from "../projects-card/project-card.component";
import Button from "../button/button.component";

import SufiCityImage from "../../assets/images/suficity.png";
import APWImage from "../../assets/images/apw.png";
import AitchisonPortalImage from "../../assets/images/aitchison_portal.png";
import SlappedHamImage from "../../assets/images/slappedham.png";

const Projects = () => {
  return (
    <section id="projects" className="bg-grey-darker pt-20 pb-20">
      <div className="w-4/5 mx-auto">
        <div className="hero-tagline-border inline-block"></div>
        <h2 className="text-white mt-6 text-3xl font-semibold tracking-wider">
          Projects
        </h2>
        <h4 className="text-white mt-4 text-xl tracking-wider mb-12">
          The most recent ones
        </h4>
        <div id="projects-gallery" className="grid md:grid-cols-2">
          <ProjectCard
            imageUrl={SufiCityImage}
            title="Sufi City"
            description="Biggest Housing Society of Mandi Bahauddin"
            url="https://suficity.com/"
          />
          <ProjectCard
            imageUrl={APWImage}
            title="APW"
            description="Leading Cable Filler Yarn Dealers"
            url="http://ashrafplasticworks.com/"
          />
          <ProjectCard
            imageUrl={SlappedHamImage}
            url="https://slappedham.com/"
            title="Slapped Ham"
            description="Top entertainment website with various categories"
          />
          <ProjectCard
            imageUrl={AitchisonPortalImage}
            title="Aitchison Portal"
            description="Official Portal for Alumni of Aitchison College"
          />
        </div>
        <div className="w-full flex justify-center">
          <Button
            className="mt-10 w-72 text-white"
            text="Request Private Portfolio"
            href={"#about-me"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
