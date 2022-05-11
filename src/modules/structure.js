/* eslint-disable class-methods-use-this */
export default class Structure {
  constructor() {
    // do nothing
  }

  create(className, tag, content) {
    this.elem = document.createElement(tag)
    this.elem.className = className
    this.elem.textContent = content
    return this.elem
  }

  toAppend(elem, ...randomClass) {
    return elem.append(...randomClass)
  }

  toPrepend(elem, ...randomClass) {
    return elem.prepend(...randomClass)
  }
}
