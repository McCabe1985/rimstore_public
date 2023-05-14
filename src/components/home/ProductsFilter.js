import React from "react";

export default function ProductsFilter({ handleFilter }) {
  return (
    <select className="store-interface-filter-controls" onChange={handleFilter}>
      <option value="allProducts" className="store-interface-controls-option">
        All Products
      </option>
      <option value="armour" className="store-interface-controls-option">
        Armour
      </option>
      <option value="bodyArmour" className="store-interface-controls-option">
        Body Armour
      </option>
      <option value="helmet" className="store-interface-controls-option">
        Helmets
      </option>
      <option value="weapons" className="store-interface-controls-option">
        Weapons
      </option>
      <option value="meleeWeapons" className="store-interface-controls-option">
        Melee Weapons
      </option>
      <option value="rangedWeapons" className="store-interface-controls-option">
        Ranged Weapons
      </option>
      <option value="medical" className="store-interface-controls-option">
        Medical
      </option>
      <option value="medicine" className="store-interface-controls-option">
        Medicine
      </option>
      <option value="bionics" className="store-interface-controls-option">
        Bionics
      </option>
      <option value="drugs" className="store-interface-controls-option">
        Drugs
      </option>
      <option value="hardDrugs" className="store-interface-controls-option">
        Hard Drugs
      </option>
      <option value="socialDrugs" className="store-interface-controls-option">
        Social Drugs
      </option>
    </select>
  );
}
