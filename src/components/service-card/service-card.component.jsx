import React from "react";

const ServiceCard = (props) => {
  const { children, title, description, className="" } = props;
    

  return (
    <div className={`${className} bg-grey-800 flex flex-col items-center justify-center text-white px-2 py-4 rounded-lg shadow-2xl`}>
      {children}
      <h2 className="font-semibold text-xl tracking-wide mb-4 text-center">{title}</h2>
      <p className="text-grey-400 text-sm text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
