import React from "react";
import { CartProvider } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";
import CartOverview from "../CartOverview";

export default function Products() {
  const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);
  const url = typeof window === "undefined" ? null : window.location.origin;
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
      successUrl={`${url}/page-2/`}
      cancelUrl={`${url}/`}
      currency="GBP"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}
    >
      <section className="products-container">
        <h3 className="products-heading">Fake Products Trader</h3>
        <CartOverview />
      </section>
    </CartProvider>
  );
}
