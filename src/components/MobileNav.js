import React from "react";
import { Link } from "gatsby";

export default function MobileNav() {
  return (
    <ul className="mobile-navbar">
      <li className="mobile-nav-item">
        <Link to="/about">Shop</Link>
      </li>
      <li className="mobile-nav-item">
        <Link to="/testimonials">Portfolio</Link>
      </li>
      <li className="mobile-nav-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}
