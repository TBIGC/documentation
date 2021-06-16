import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';

const GoogleSiteVerification = () => (
  <Head>
    <meta name="google-site-verification" content="-clqnBxHgIwDM3VaSWDeTCK7WkUFCyzyUHPB5szcHno" />
  </Head>
);

const features = [
  {
    title: 'Simple to use',
    imageUrl: 'img/undraw_website_builder_bxki.svg',
    description: (
      <>
        Accessible and intuitive, even to users with little prior experience of using
        software
      </>
    ),
  },
  {
    title: 'Effortless collaboration',
    imageUrl: 'img/undraw_shared_goals_3d12.svg',
    description: (
      <>
        A single platform to plan and track projects where anyone can contribute
      </>
    ),
  },
  {
    title: 'Track real time data',
    imageUrl: 'img/undraw_visual_data_b1wx.svg',
    description: (
      <>
        Updates to tasks, key performances indicators and budgets are instantly available
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <GoogleSiteVerification/>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              View the user manual
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
