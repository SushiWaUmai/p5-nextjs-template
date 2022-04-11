import type { NextPage } from "next";
import SketchComponent from "../components/SketchComponent";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>p5 + Next.js template</title>
      </Head>
      <SketchComponent />
    </>
  );
};

export default Home;
