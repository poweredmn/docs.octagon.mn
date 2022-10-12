// @ts-ignore
import React from "react";
import "intro.js/introjs.css";
import { Steps, Hints } from "intro.js-react";

export default function Hero() {
  const Steps = dynamic(
    () => import("intro.js-react").then((mod) => mod.Steps),
    {
      ssr: false,
    }
  );
  const Hints = dynamic(
    () => import("intro.js-react").then((mod) => mod.Hints),
    {
      ssr: false,
    }
  );
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
    <div>
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
    </div>
  );
}
function dynamic(arg0: () => Promise<typeof Hints>, arg1: { ssr: boolean }) {
  throw new Error("Function not implemented.");
}
