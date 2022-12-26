import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import "./App.css";
import HomePage from "./components/HomePage";
import { ProductProvider } from "./ProductContext";

function App() {
  return (
    <ProductProvider>
      <DragDropContext onDragEnd={() => {}}>
        <HomePage />
      </DragDropContext>
    </ProductProvider>
  );
}

export default App;
