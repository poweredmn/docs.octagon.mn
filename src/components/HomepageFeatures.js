import React, { useEffect } from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import ReactGA from "react-ga";

const FeatureList = [
  {
    title: "NFT marketplace",
    image: require("../../static/img/logo/OCTAGON-LOGO.png").default,
    description: (
      <>
        Төрөл бүрийн NFT авах зарах, цуглуулах, ашиглах боломжийг хүн бүрт олгох зорилготой
        идэвхитэй хөгжүүлэгдэж байгаа платформ.
      </>
    ),
  },
  {
    title: "Utility",
    image: require("../../static/img/logo/OCTAGON-LOGO.png").default,
    description: (
      <>
        NFT зөвхөн цуглуулга байдлаар биш, өдөр тутмын хэрэглээнд ашиглаж болохуйц болгож хөгжүүлэх
        зорилготой.
      </>
    ),
  },
  {
    title: "Бүтээл гаргах",
    image: require("../../static/img/logo/OCTAGON-LOGO.png").default,
    description: (
      <>Өөрийн уран бүтээл, галзуу санаагаа NFT болгоход тань бид зөвлөж, хамтарч ажиллах болно.</>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      {/* <div className="text--center">
        <img src={image} alt={title} width={150} height={150}/>
      </div> */}
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
