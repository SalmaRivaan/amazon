import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price} </strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img className="product__img" src={image} alt="" />

      <div className="product__div">
        <button className="product__btn" onClick={addToBasket}>
          Add to basket
        </button>
      </div>
   <a href="https://newsrapido.com/">news updates</a>
            <a href="https://jobreadyindia.com/">career updates</a>
    </div>
  );
};

export default Product;
