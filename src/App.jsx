import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <HomePage />
    </DndProvider>
  );
}

export default App;
