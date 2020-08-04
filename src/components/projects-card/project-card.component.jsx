import React from "react";

import "./project-card.css";

const ProjectCard = (props) => {
  const { imageUrl, projectTitle, title, description, url } = props;

  return (
    <div className="relative project-card">
      <img
        className=" object-left-top object-cover w-full h-64"
        src={imageUrl}
        alt={projectTitle}
      />
      <div className="overlay bg-black h-full absolute z-10 w-full top-0 left-0 opacity-75 flex justify-center items-center text-white flex-col">
        <h2 className="text-3xl tracking-wider font-bold">{title}</h2>
        <p className="text-xl xsm:py-4 xsm:px-4 xsm:text-center">{description}</p>
        {url !== undefined ? <a href={url} target="_blank" className="mt-4">Visit Website </a> : ''}
      </div>
    </div>
  );
};

export default ProjectCard;
