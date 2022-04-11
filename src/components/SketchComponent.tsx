import React from "react";
import { setup, draw } from "../utils/sketch";
import dynamic from "next/dynamic";
import Head from "next/head";

const Sketch = dynamic(import("react-p5"), { ssr: false });

interface SketchComponentProps {}

const SketchComponent: React.FC<SketchComponentProps> = () => {
  return (
    <>
      <Head>
        <title>p5 + Next.js template</title>
      </Head>
      <Sketch setup={setup} draw={draw} />
    </>
  );
};

export default SketchComponent;
