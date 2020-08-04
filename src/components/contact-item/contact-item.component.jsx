import React from "react";
import "./contact-item.css";

const ContactItem = (props) => {
  const { className, children, description, onClick } = props;
  return (
    <div
      onClick={() => onClick()}
      className={`${className} flex items-center bg-grey-darker py-2 px-4 contact-box-shadow border-l-4 contact-item`}
    >
      {children}
      <h3 className="ml-4 text-white">{description}</h3>
    </div>
  );
};

export default ContactItem;
