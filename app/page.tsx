"use client";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" sizes="any"></link>
      </Head>
      <div
        style={{
          background:
            "radial-gradient(33.96% 49.45% at 30.52% 36.28%, rgba(155, 120, 255, 0.2) 25%, rgba(255, 255, 255, 0) 90%)",
          backgroundSize: "100%",
          backgroundPosition: "right 5em top 2em",
        }}
        className="h-screen overflow-hidden"
      >
        <HeroSection></HeroSection>
      </div>
      <div>
        <Projects></Projects>
      </div>
      <div>
        <Skills></Skills>
      </div>
      <div>
        <Education></Education>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </div>
  );
}
