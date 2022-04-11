import type p5Type from 'p5'

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  p5.createCanvas(p5.windowHeight, p5.windowHeight).parent(canvasParentRef)
}

export const draw = (p5: p5Type): void => {
  p5.background(0)
  p5.noStroke()
  p5.fill(255)
  p5.ellipse(p5.width / 2, p5.height / 2, p5.width / 2, p5.height / 2)
}
