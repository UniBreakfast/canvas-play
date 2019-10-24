import { log, on } from './helpers.js'
import Canvas from './Canvas.js'
import Director from './Director.js'
import Block from './Block.js'


canvas = new Canvas(canvas, {top: 10, right: 10, bottom: 10, left: 10})
director = new Director(canvas)
director.generateBlocks(300)
director.start()