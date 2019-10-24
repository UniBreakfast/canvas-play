import { assign, rnd, log } from './helpers.js'
import Block from './Block.js'

export default class Director {

  constructor(canvas) {
    assign(this, {canvas, blocks: [], frame: 0, intervals: []})
  }

  include(block) {
    this.blocks.push(block)
    this.canvas.rectCorner(block.color, block.left, block.top, block.width, block.height)
  }

  animate(timestamp, prevTimestamp) {
    this.canvas.clear()
    this.blocks.forEach(block => {
      if (block.bottom < this.canvas.height) {
        block.speed += .003*(timestamp - prevTimestamp)
        block.bottom += block.speed
        block.top = block.bottom - block.height
      } else {
        block.speed = 0
        block.bottom = this.canvas.height
        block.top = block.bottom - block.height
      }
      this.canvas.rectCorner(block.color, block.left, block.top, block.width, block.height)
    })
    this.frame = requestAnimationFrame(nextTimestamp => this.animate(nextTimestamp, timestamp))
  }

  start() {
    this.frame = requestAnimationFrame(this.animate.bind(this, new Event(0).timeStamp))
  }

  stop() {
    cancelAnimationFrame(this.frame)
  }

  generateBlocks(interval) {
    this.intervals.push(setInterval(()=> {
      const width = rnd(20, 200), left = rnd(0, this.canvas.width-width)
      this.include(new Block({width, left, top: 0}).materialise())
    }, interval))
  }

  enough() {
    this.intervals.forEach(interval => clearInterval(interval))
  }

}

