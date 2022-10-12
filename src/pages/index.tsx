import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import LayoutTw from "@site/src/theme/LayoutTw";
import "intro.js/introjs.css";
import { Steps, Hints } from "intro.js-react";
import Announcement from "../components/Homepage/Announcement";
import Hero from "../components/Homepage/Hero";
import Club from "../components/Homepage/Club";
import Collections from "../components/Homepage/Collections";
import Posts from "../components/Homepage/Posts";
import Staking from "../components/Homepage/Staking";

export default function Home() {
  //https://github.com/HiDeoo/intro.js-react
  const { siteConfig } = useDocusaurusContext();
  const steps = [
    {
      element: ".highlightClass-0",
      intro: "Хөгжүүлэлттэй холбоотой постууд",
      position: "left",
    },
    {
      element: ".highlightClass-1",
      intro: "Крипто ертөнцийн эргэн тойронд",
      position: "top",
    },
    {
      element: ".highlightClass-2",
      intro: "Хэвлэл мэдээллийн сувгуудаар цацагдсан манай контентууд",
      position: "top",
    },
    {
      element: ".highlightClass-3",
      intro: "Тайлбар бичлэгүүд",
      position: "top",
    },
    {
      element: ".highlightClass-4",
      intro: "Хэрэглэгчиддээ зориулсан бүх төрлийн сургалтууд",
      position: "right",
    },
  ];
  const hints = [
    {
      element: ".highlightClass-0",
      hint: "Хөгжүүлэлтийн долоо хоног бүрийн мэдээлэл энд орж байх болно.",
      hintPosition: "top-right",
    },
  ];
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
          <Steps
            enabled={true}
            steps={steps}
            initialStep={0}
            onExit={null}
            ref={(steps) => (this.steps = steps)}
          />
          <Hints
            enabled={true}
            hints={hints}
            ref={(steps) => (this.steps = steps)}
          />
          <Staking />
        </main>
      </LayoutTw>
    </Layout>
  );
}
