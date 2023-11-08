import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Explore new ways',
    Svg: require('@site/static/img/undraw_cloud_hosting_7xb1.svg').default,
    description: (
      <>
        Get started with kliganN's documentation :)
      </>
    ),
  },
  {
    title: 'Community documentation',
    Svg: require('@site/static/img/undraw_connected_world_wuay.svg').default,
    description: (
      <>
        Understand the fundamentals of Linux, Git, Networks, Ansible and etc.
      </>
    ),
  },
  {
    title: 'Contant me',
    Svg: require('@site/static/img/undraw_dev_productivity_re_fylf.svg').default,
    description: (
      <>        
      <p>E-mail: <a href="mailto:kligann@subnetwork.ru">kligann@subnetwork.ru</a></p>
      <p>Telegram: <a href="https://t.me/kliganN" target="_blank">@kliganN</a></p>
      <p>Steam: <a href="https://steamcommunity.com/id/BarrySeal1939" target="_blank">BarrySeal1939</a></p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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
