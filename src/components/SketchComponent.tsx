import React from "react";
import { setup, draw } from "../utils/sketch";
import dynamic from "next/dynamic";

const Sketch = dynamic(import("react-p5"), { ssr: false });

interface SketchComponentProps {}

const SketchComponent: React.FC<SketchComponentProps> = () => {
  return <Sketch setup={setup} draw={draw} />;
};

export default SketchComponent;
