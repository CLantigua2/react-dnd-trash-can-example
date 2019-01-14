import React, { Component } from "react"
import { DropTarget } from "react-dnd"

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  }
}

//this will be the target where the draggable item will go to set off the event
class Target extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props
    const backgroundColor = hovered ? "lightgreen" : "white"
    return connectDropTarget(
      <div className="target" style={{ backgroundColor }}>
        Target
      </div>
    )
  }
}

export default DropTarget("item", {}, collect)(Target)
