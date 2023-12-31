import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from '../styles/index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      onClick={() => {
        window.location = '/docs/category/收藏'
      }}
    >
      <div className="container">
        <img
          className={styles.avatar}
          src="/img/logo.gif"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div>You can submit any legal code and documents when you feel bored.</div>
        <div>当你感到无聊时，你可以为此项目发起PR，任何合法的、非政治性的、非破坏性的PR都将被合并。</div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="">
      <HomepageHeader />
    </Layout>
  );
}
