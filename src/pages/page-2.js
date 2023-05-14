import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

const SuccessPage = () => {
  return (
    <Layout>
      <section className="success-messsage-container">
        <p className="success-message">YOUR PURCHASE WAS SUCCESSFUL</p>
        <Link to="/" className="success-page-link">
          Return to Store
        </Link>
      </section>
    </Layout>
  );
};

export default SuccessPage;
