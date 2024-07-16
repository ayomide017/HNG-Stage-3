import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { FaStar } from "react-icons/fa";

export const ProductCard = (props) => {
  const { handleAddToCart } = props;
  // console.log(props.product.name);
  // console.log(props.product.current_price[0].USD[0])
  // console.log(props.product.current_price[0].USD[1])
  // Destructure the product object from props
  const { name, current_price } = props.product;
  // Function to get current price in USD
  const getCurrentPriceUSD = () => {
    if (current_price && current_price.length > 0) {
      // Check if there's a USD price available
      const usdPrice = current_price.find((price) => price.USD);
      if (usdPrice) {
        return usdPrice.USD[0]; // Assuming USD[0] contains the price as a string
      }
    }
    return "Price not available"; // Handle case where USD price is not found
  };

  // Function to get discount price in USD
  const getDiscountPriceUSD = () => {
    if (current_price && current_price.length > 0) {
      // Check if there's a USD price available
      const discountPrice = current_price.find((price) => price.USD);
      if (discountPrice) {
        return discountPrice.USD[1]; // Assuming USD[0] contains the price as a string
      }
    }
    return "Discount price not available"; // Handle case where discount price is not found
  };
  return (
    // <div></div>
    <article className="products__card">
      <div className="products__img">
        <img
          src={`https://api.timbu.cloud/images/${props.product.photos[0].url}`}
        />
      </div>
      <div className="products__content stack">
        <div className="products__content--upper">
          <p className="products__name">{props.product.name}</p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="products__rating">4 </span>
            <FaStar style={{ color: "yellow", marginLeft: "5px" }} />
          </div>
        </div>

        <div className="products__content--lower">
          <p className="products__actual-price">${getCurrentPriceUSD()}</p>
          <p className="products__discount-price">
            ${getDiscountPriceUSD()}
          </p>
        </div>
        {/* "/cart" */}
        <Link to="/shopping">
          <Button
            className="btn-br"
            text="Add to cart"
            onClick={handleAddToCart}
          />
        </Link>
      </div>
    </article>
  );
};
