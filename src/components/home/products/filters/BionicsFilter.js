import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProductsCard from "../ProductsCard";

export default function BionicsFilter() {
  const data = useStaticQuery(graphql`
    query BionicsQuery {
      prices: allStripePrice(
        filter: { product: { metadata: { sub_category: { eq: "bionics" } } } }
        sort: { active: ASC }
      ) {
        edges {
          node {
            id
            currency
            unit_amount
            product {
              images
              name
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
