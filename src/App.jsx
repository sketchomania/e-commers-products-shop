import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <DragDropContext onDragEnd={()=>{}}>
      <HomePage />
    </DragDropContext>
  );
}

export default App;
