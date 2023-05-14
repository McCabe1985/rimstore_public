import React from "react";
import HeroImg from "../../images/rimpig.png";
import Products from "./products/Products";

export default function Header() {
  return (
    <header className="hero-container">
      <Products />
      <img src={HeroImg} alt="" className="hero-img" />
    </header>
  );
}
