import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProductsToAdd, setSelectedProductsToAdd] = useState([]);

//   const addProduct = (productId, productTitle, variant) => {
  const addProduct = (proArr) => {
    setSelectedProductsToAdd((prevState) => [
    //   ...prevState,
      proArr,
    //   {
    //     id: productId,
    //     title: productTitle,
    //     variant: variant,
    //   },
    ]);
  };

  return (
    <ProductContext.Provider value={{ selectedProductsToAdd, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
