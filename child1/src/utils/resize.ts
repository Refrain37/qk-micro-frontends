const elementResizeDetectorMaker = require('element-resize-detector')
const ERD = elementResizeDetectorMaker()

export function onElementResize(id: string, callback: Function) {
  ERD.listenTo(document.getElementById(id), callback)
}
