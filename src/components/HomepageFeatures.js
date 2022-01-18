import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Зорилго',
    image: require('../../static/img/logo/OCTAGON-LOGO.png').default,
    description: (
      <>
        Технологи, блокчейн технологийг бодит хэрэглээнд ухаалгаар нэвтрүүлсэн NFT захыг барих болно.
      </>
    ),
  },
  {
    title: 'Зорилт',
    image: require('../../static/img/logo/OCTAGON-LOGO.png').default,
    description: (
      <>
        Хэрэглэгч бүр өөрийн дижитал бүтээлээ оруулах боломжтой, хүссэнээрээ манай технологийг ашиглах боломжтой, чөлөөт зах байх болно.
      </>
    ),
  },
  {
    title: 'Алсын хараа',
    image: require('../../static/img/logo/OCTAGON-LOGO.png').default,
    description: (
      <>
        DAO дээр суурилсан олон улсын NFT marketplace болохын төлөө зорин ажиллаж байна.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
