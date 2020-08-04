import React from "react";

const MobileMenuItem = (props) => {
  const { className, children, href, onClick, description } = props;
  return (
    <div
      className={`${className} flex items-center bg-grey-darker py-2 px-4 contact-box-shadow border-l-4 contact-item`}
    >
      {children}
      <a className="ml-4 text-white" href={href}>{description}</a>
    </div>
  );
};

export default MobileMenuItem;
