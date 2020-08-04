import React from "react";
import "./button.css";

const Button = (props) => {
  const { text, className, href } = props;
  return (
    <a
      className={`inline-block button ${className} text-center py-3 border rounded-lg border-transparent uppercase text-sm shadow-md tracking-wider font-medium outline-none pointer`}
    href={href}>
      {text}
    </a>
  );
};

export default Button;
