import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LayoutTw from '@site/src/theme/LayoutTw';

import Announcement from '../components/Homepage/Announcement';
import Hero from '../components/Homepage/Hero';
import Club from '../components/Homepage/Club';
import Collections from '../components/Homepage/Collections';
import Posts from '../components/Homepage/Posts';
import Staking from '../components/Homepage/Staking';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Тавтай морил`}
      description="Октагон маркетплейсийн тухай мэдээ мэдээлэл, тоо баримтууд"
    >
      <LayoutTw>
        <Announcement />
        <Hero />
        <main className="pt-0">
          <section className="relative max-w-7xl mx-auto lg:grid grid-cols-1 lg:grid-cols-5 gap-3 lg:px-3">
            <Club />
            <Collections />
          </section>
          <Posts />
          <Staking />
        </main>
      </LayoutTw>
    </Layout>
  );
}
