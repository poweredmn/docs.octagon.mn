import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default function News() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`News`}
      description="Description will go into a meta tag in">
      <main className="container">
        <h1>News here</h1>
      </main>
    </Layout>
  );
}