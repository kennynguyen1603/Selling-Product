import React from "react";
import "../assets/style/TurningPages.css";

const TurningPages = () => {
  return (
    <div className="turning-page">
      <button className="turning-pages-pre" aria-label="Previous page"></button>
      <button className="turning-pages-next" aria-label="Next page"></button>
    </div>
  );
};

export default TurningPages;
