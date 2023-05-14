import React from "react";
import { loadStripe } from "../utils/stripejs";
import Layout from "../components/Layout";
import Header from "../components/home/Header";

export default function Home() {
  return (
    <Layout>
      <main className="main-content-container">
        <Header />
      </main>
    </Layout>
  );
}
