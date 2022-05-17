import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Tech Notes',
    imgUrl: 'img/home/tech_note.png',
    description: (
      <>
        What I've learned about <code>code things</code>.
      </>
    ),
  },
  {
    title: 'Side Projects',
    imgUrl: 'img/home/side_project.png',
    description: (
      <>
        What I've tried to make <code>code things</code> come true.
      </>
    ),
  },
  {
    title: 'Ideal Life Blog',
    imgUrl: 'img/home/life.png',
    description: (
      <>
        What I've learned from life.
      </>
    ),
  },
];

function Feature({imgUrl, title, description}) {
  const imageUrl = useBaseUrl(imgUrl);
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p style={{color: "gray", fontWeight: 600}}>{description}</p>
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
