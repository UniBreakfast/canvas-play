import { on, assign } from './helpers.js'


export default class Canvas {

  constructor(canvas, margins) {
    assign (this, {canvas, margins, ctx: canvas.getContext('2d')})
    this.resize()
    on('resize', this.resize.bind(this))
  }

  calc() {
    const { top, right, bottom, left } = this.margins
    assign(this, {width: innerWidth-left-right, height: innerHeight-top-bottom})
  }

  resize() {
    this.calc()
    assign(this.canvas, {width: this.width, height: this.height})
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  rectCorner(color, x, y, width, height=width) {
    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, width, height)
  }

  rectCenter(color, x, y, width, height=width) {
    this.rectCorner(color, x-width/2, y-height/2, width, height)
  }

}