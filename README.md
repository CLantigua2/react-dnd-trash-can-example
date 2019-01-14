1. install the packages
   npm install --save react-dnd
   npm install --save react-dnd-html5-backend

2. wrap your app in a context
   export default DragDropContext(HTML5Backend)(App)

3. wrap the item you want to drag in a DragSource context
   export default DragSource(type, spec, collect)(Item)
