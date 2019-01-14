1. install the packages
   npm install --save react-dnd
   npm install --save react-dnd-html5-backend

2. wrap your app in a context
   export default DragDropContext(HTML5Backend)(App)

# in item file (the item that will be dragged)

3. wrap the item you want to drag in a DragSource context
   export default DragSource(type, spec, collect)(Item)
   (the type is just a string, you can write it in if you want)

4. pass the itemSource/spec with begindDrag and endDrag methods
   const itemSource = {
   beginDrag(props) {
   return props.item
   },
   endDrag(props, monitor, component) {
   return props.handleDrop(props.item.id)
   }
   }

5. create the collect object which will hold connect and monitor function calls.
   function collect(connect, monitor) {
   return {
   connectDragSource: connect.dragSource(),
   connectDragPreview: connect.dragPreview(),
   isDragging: monitor.isDragging()
   }
   }
