import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import { hotjar } from "react-hotjar";
import ReactGA from "react-ga";

const TRACKING_ID = "G-F8GGMXS5J9";
ReactGA.initialize(TRACKING_ID);

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--dark", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Octagon NFT арилжааны платформын мэдээлэл, хэрэглэгчдэд өгөх заавар зөвлөгөөг нэгтгэсэн
          тэмдэглэл юм..
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            NFT-г ойлгож хэрэглэх нь
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    hotjar.initialize(2982713, 1);
  }, []);

  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
