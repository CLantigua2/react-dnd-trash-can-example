import React, { Component } from "react"
import Item from "./Item"
import Target from "./Target"
import HTML5Backend from "react-dnd-html5-backend"
import { DragDropContext } from "react-dnd"
import "./App.css"

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
      { id: 4, name: "Item 4" }
    ]
  }

  deleteItem = id => {
    console.log("deleting id: " + id)
  }
  render() {
    return (
      <div className="App">
        <div className="app-intro">
          <div className="app-container">
            {this.state.items.map((item, i) => (
              <Item
                key={item.id}
                item={item}
                handleDrop={id => this.deleteItem(id)}
              />
            ))}
          </div>
          <Target />
        </div>
      </div>
    )
  }
}

// wrap your entire app in a context
export default DragDropContext(HTML5Backend)(App)
