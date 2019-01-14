import React, { Component } from "react"
import { DragSource } from "react-dnd"

// pass the dnd methods as props
const itemSource = {
  beginDrag(props) {
    return props.item
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return
    }
    return props.handleDrop(props.item.id)
  }
}

// create a collect object that holds the drag stuff
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

// wrap your dragable item in a connectDragSource so that your app knows it has the properties above
class Item extends Component {
  render() {
    const { isDragging, connectDragSource, item } = this.props
    const opacity = isDragging ? 0 : 1
    return connectDragSource(
      <div className="item" style={{ opacity }}>
        <span>{item.name}</span>
      </div>
    )
  }
}

export default DragSource("item", itemSource, collect)(Item)
