import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dragon Age: Origins',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/origins/welcome">
            Start running
          </Link>
        </div>
        <br/>
        <div>
          This wiki should document the most up-to-date guides for learning the overall route and individual strats
        </div>
      </>
    ),
  },
  {
    title: 'Dragon Age 2',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/origins/welcome">
            Start running
          </Link>
        </div>
    ),
  },
  {
    title: 'Dragon Age: Inquisition',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/origins/welcome">
            Start running
          </Link>
        </div>
    ),
  },
  {
    title: 'Dragon Age: Dreadwolf',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/origins/welcome">
            Start running
          </Link>
        </div>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        {/*<Svg className={styles.featureSvg} role="img" />*/}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
