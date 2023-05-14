import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProductsCard from "../ProductsCard";

export default function AllProducts() {
  const data = useStaticQuery(graphql`
    query ProductPrices {
      prices: allStripePrice(
        filter: { active: { eq: true } }
        sort: { unit_amount: ASC }
      ) {
        edges {
          node {
            id
            active
            currency
            unit_amount
            product {
              id
              name
              images
              description
            }
          }
        }
      }
    }
  `);

  const prod = data.prices.edges;
  return (
    <article className="products-section">
      {prod.map(({ node: price }) => {
        const newProd = {
          id: price.id,
          name: price.product.name,
          price: price.unit_amount,
          currency: price.currency,
          image: price.product.images,
          description: price.product.description,
        };
        return <ProductsCard key={price.id} prod={newProd} />;
      })}
    </article>
  );
}
