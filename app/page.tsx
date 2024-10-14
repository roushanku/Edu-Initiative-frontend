import HeroSection from "@/components/Home/hero";
import Head from 'next/head';

export default function Home() {
  return (
    <>
       <Head>
        <link href="https://fonts.googleapis.com/css2?family=Figgys+Fleece&display=swap" rel="stylesheet" />
      </Head>
      <HeroSection/>
    </>
  );
}
