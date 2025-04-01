import React from "react";
import "./ProductDisplay.css";
import startIcon from "../Assets/star_icon.png";
import startDullIcon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-main-img">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-ratingimg">
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startDullIcon} alt="" />
          <p>(120)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-old">${product.old_price}</div>
          <div className="productDisplay-right-new">${product.new_price}</div>
        </div>
        <div className="productDisplay-right-description">
          A lightweight, usually knitted, pullover, shirt, close-fitting and
          with a round neckline and short sleeves, worn as an undershirt or
          outer garment.
        </div>
        <div className="productDisplay-right-size">
            <h1>Select Size</h1>
            <div className="productDisplay-right-size-boxes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <div>
            <button>ADD TO CART</button>
            <p className="productDisplay-right-category">
                <span>Category :</span>Women, T-Shirt, Crop Top
            </p>
            <p className="productDisplay-right-category">
                <span>Tags :</span>Modern, Latest
            </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
