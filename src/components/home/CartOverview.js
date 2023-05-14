import React, { useState } from "react";
import AllProducts from "./products/filters/AllProducts";
import ArmourFilter from "./products/filters/ArmourFilter";
import BionicsFilter from "./products/filters/BionicsFilter";
import DrugsFilter from "./products/filters/DrugsFilter";
import HardDrugsFilter from "./products/filters/HardDrugsFilter";
import MedicalFilter from "./products/filters/MedicalFilter";
import MedicineFilter from "./products/filters/MedicineFilter";
import MeleeWeaponsFilter from "./products/filters/MeleeWeaponsFilter";
import RangedWeaponsFilter from "./products/filters/RangedWeaponsFilter";
import SocialDrugsFilter from "./products/filters/SocialDrugsFilter";
import WeaponsFilter from "./products/filters/WeaponsFilter";
import BodyArmourFilter from "./products/filters/BodyArmourFilter";
import HelmetFilter from "./products/filters/HelmetFilter";
import ProductsFilter from "./ProductsFilter";

import { useShoppingCart } from "use-shopping-cart";

export default function CartOverview() {
  const [loading, setLoading] = useState(false);
  /* Gets the totalPrice and a method for redirecting to stripe */
  const { formattedTotalPrice, redirectToCheckout, cartCount, clearCart } =
    useShoppingCart();

  const [filter, setFilter] = useState("allProducts");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const renderFilteredProducts = () => {
    switch (filter) {
      case "allProducts":
        return <AllProducts />;
      case "armour":
        return <ArmourFilter />;
      case "bodyArmour":
        return <BodyArmourFilter />;
      case "helmet":
        return <HelmetFilter />;
      case "weapons":
        return <WeaponsFilter />;
      case "meleeWeapons":
        return <MeleeWeaponsFilter />;
      case "rangedWeapons":
        return <RangedWeaponsFilter />;
      case "medical":
        return <MedicalFilter />;
      case "medicine":
        return <MedicineFilter />;
      case "bionics":
        return <BionicsFilter />;
      case "drugs":
        return <DrugsFilter />;
      case "hardDrugs":
        return <HardDrugsFilter />;
      case "socialDrugs":
        return <SocialDrugsFilter />;
      default:
        return <AllProducts />;
    }
  };
  return (
    <div className="shopping-cart-container">
      {/* This is where we'll render our minified cart */}

      <div className="store-interface-container">
        <div className="store-interface-cart-info-container">
          <p className="cart-text">Number of Items: {cartCount}</p>
          <p className="cart-text">Total: {formattedTotalPrice}</p>
        </div>

        <ProductsFilter handleFilter={handleFilter} />
      </div>

      {/* bring in products section*/}
      {renderFilteredProducts()}

      {/* checkout buttons */}
      <div className="cart-button-container">
        <button
          disabled={loading}
          className="left-cart-button cart-button"
          onClick={(e) => {
            e.preventDefault();
            setLoading(true);
            redirectToCheckout();
          }}
        >
          {loading ? "Loading..." : "Accept"}
        </button>
        {/* clear cart */}
        <button
          onClick={(e) => {
            e.preventDefault();
            clearCart();
          }}
          className="right-cart-button cart-button"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
