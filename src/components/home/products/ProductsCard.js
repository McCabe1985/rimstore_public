import React, { useState } from "react";
import InfoIcon from "../../../images/InfoButton.svg";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

export default function ProductsCard({ prod }) {
  const [isShown, setIsShown] = useState(false);
  const { addItem, decrementItem } = useShoppingCart();

  return (
    <article className="product-card-container">
      <div className="product-card-item-details">
        <img src={prod.image} alt={prod.name} className="product-card-img" />
        <img
          src={InfoIcon}
          alt="info"
          className="product-card-info-button"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
        <p className="product-card-name">{prod.name} </p>
      </div>

      <p
        className={
          isShown
            ? "product-card-description toggle-description"
            : "product-card-description"
        }
      >
        {prod.description}
      </p>

      <div className="product-card-item-count">
        <span className="product-card-price">
          {formatCurrencyString({
            value: parseInt(prod.price, 10),
            currency: prod.currency,
          })}
        </span>
        <button
          className="product-card-btn"
          onClick={() => decrementItem(prod.id, { count: 1 })}
        >
          -
        </button>
        <button className="product-card-btn" onClick={() => addItem(prod)}>
          +
        </button>
      </div>
    </article>
  );
}
