/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: process.env.GATSBY_STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
  ],
};
