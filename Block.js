import { assign, rnd, log } from './helpers.js'


export default class Block {
  
  constructor({color=`hsl(${rnd(0,360)} ${rnd(50,90)}% ${rnd(40,80)}%)`,
    width=rnd(20,200), height=rnd(20,200), center,
    left=center? center-width/2 : 50, top=center? center-height/2 : 50}={}) {
      assign(this, {color, width, height, center, left, top, 
                    right: left+width, bottom: top+height})
  }

  materialise(weight=rnd(1, 1000)/10, direction=0, speed=0) {
    return assign(this, {weight, direction, speed})
  }

}
