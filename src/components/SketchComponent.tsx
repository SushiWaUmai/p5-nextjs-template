import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "../utils/sketch";

interface SketchComponentProps {}

const SketchComponent: React.FC<SketchComponentProps> = () => {
  return <ReactP5Wrapper sketch={sketch} />;
};

export default SketchComponent;
