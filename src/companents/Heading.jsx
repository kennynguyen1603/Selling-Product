import React from "react";
import "../assets/style/Heading.css";

const Heading = ({ title }) => {
  return (
    <div>
      <h2 className="heading">{title}</h2>
    </div>
  );
};

export default Heading;
