import { P5Instance } from "react-p5-wrapper";

const sketch = (p5: P5Instance) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowHeight, p5.windowHeight);
  };
  
  p5.draw = () => {
    p5.background(0);
    p5.fill(255);
    p5.stroke(255);
    p5.ellipse(p5.width / 2, p5.height / 2, p5.width / 2, p5.height / 2);
  };
};

export default sketch;
