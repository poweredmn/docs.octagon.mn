import React from "react";
import Layout from "@theme/Layout";
import DescriptionCards from "../components/landing/DescriptionCards";
import Hero from "../components/landing/Hero";

export default () => {
  return (
    <Layout>
      <head>
        <meta property="og:image" content="img/opengraph_image.png" />
        <meta name="keywords" content="Octagon, blockchain, ecosystem, docs" />
        <meta name="description" content="Октагон экосистемийн гарын авлага" />
      </head>
      <Hero />
      <DescriptionCards />
    </Layout>
  );
};
