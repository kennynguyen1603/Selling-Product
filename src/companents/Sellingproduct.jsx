import React from "react";
import "../assets/style/SellingProduct.css";
import StarRating from "../companents/StarRating";

// Trong SellingProduct.js
function SellingProduct({ title, src, alt, rating, price, originalPrice }) {
  return (
    <div className="col">
      <div className="thumb-wrapper">
        <div className="productImage">
          <img src={src} alt={alt} />
        </div>
        <div className="product-content">
          <h4 className="product-name">{title}</h4>
          <div className="star-rating">
            <StarRating totalStars={5} rating={rating} />{" "}
          </div>
          <div className="product-price">
            <strike className="originalPrice">{originalPrice}</strike>
            <b>{price}</b>
          </div>
          <div className="cart">
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellingProduct;
