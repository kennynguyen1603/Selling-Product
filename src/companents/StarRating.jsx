import React from "react";
import "../assets/style/StarRating.css";
const StarRating = ({ totalStars = 5, rating = 0 }) => {
  const hasHalfStar = rating % 1 > 0;

  return (
    <div>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          filled={i < Math.floor(rating)}
          half={hasHalfStar && i === Math.floor(rating)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled = false, half = false }) => (
  <span className={`star ${filled ? "filled" : ""} ${half ? "half" : ""}`}>
    ★
  </span>
);

export default StarRating;
