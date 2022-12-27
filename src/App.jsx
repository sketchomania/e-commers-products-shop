import React from "react";

import "./App.css";
import HomePage from "./components/HomePage";
import { ProductProvider } from "./ProductContext";

function App() {
  return (
    <ProductProvider>
      <HomePage />
    </ProductProvider>
  );
}

export default App;
