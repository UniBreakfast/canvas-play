import { log, on } from './helpers.js'
import Canvas from './Canvas.js'
import Director from './Director.js'
import Block from './Block.js'


canvas = new Canvas(canvas, {top: 0, right: 0, bottom: 0, left: 0})
director = new Director(canvas)
director.generateBlocks(600)
director.start()