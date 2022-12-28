import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Product from "./product/Product";
import AddProduct from "./addProduct/AddProduct";
import SwapElements from "./utils/SwapElements";

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [indexToAdd, setIndexToAdd] = useState(0);
  // const [showCancelProduct, setShowCancelProduct] = useState(false);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    console.log(result);
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return;

    let productSelected,
      variantSelected,
      productListCopy = productList;

    if (source.droppableId === "ProductList" && destination.droppableId === "ProductList") {
      // productSelected = productListCopy[source.index];
      // swap elements
      SwapElements(productListCopy, source.index, destination.index);
    }

    // variant drag handler
    const productIndex = draggableId.split(" ")[0];
    // console.log(productIndex);
    if (
      source.droppableId === `Product-${productIndex} VariantList` &&
      destination.droppableId === `Product-${productIndex} VariantList`
    ) {
      // productSelected = productListCopy[productIndex];
      // variantSelected = productSelected.variants[source.index];
      // console.log("productIndex: ", productIndex, "variantIndex", source.index,  variantSelected);

      SwapElements(productListCopy[productIndex].variants, source.index, destination.index);
    }

    setProductList(productListCopy);
  };

  const addEmptyProduct = () => {
    const emptyProduct = {
      id: Date.now(),
      title: "Select Product",
      variants: [],
    };
    setProductList([...productList, emptyProduct]);
  };

  const addSelectedProductsAtIndex = (atIndex, itemArr) => {
    if (productList.length < 1) {
      setProductList(itemArr);
    } else {
      const newarr = [...productList];
      // if(itemArr.length <1) {
      //   newarr.splice(atIndex, 1, itemArr)
      // }else{
      newarr.splice(atIndex, 1, ...itemArr);
      // }
      setProductList(newarr);
    }
  };

  const removeProduct = (productIndex) => {
    // const removedValue = productList[productIndex];
    const newarr = [...productList];
    newarr.splice(productIndex, 1);
    setProductList(newarr);
  };

  // const checkProductListLength = () => {
  //   const newarr = [...productList];
  //   const len = newarr.filter((product) => {
  //     product.title !== "Select Product";
  //   }).length;

  //   if (len > 1) {
  //     setShowCancelProduct(true);
  //   } else {
  //     setShowCancelProduct(false);
  //   }

  //   console.log("len: ", len);
  // };

  const removeVariant = (productIndex, variantIndex) => {
    const item = productList[productIndex];
    item.variants.splice(variantIndex, 1);
    const newarr = [...productList];
    newarr.splice(productIndex, 1, item);
    setProductList(newarr);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="h-screen w-full">
        <div className="bg-zinc-100 h-screen mx-auto w-3/5 border px-8">
          <p className="text-2xl pt-8 text-yellow-500 font-bold">Add Products</p>
          <div className="pb-2 pt-4">
            <div className="flex justify-between">
              <p className="text-md  pl-4 text-zinc-500 font-semibold m-2">Product</p>
              <p className="text-md  pr-12 text-zinc-500 font-semibold m-2">Discount</p>
            </div>
            <Droppable droppableId="ProductList" type="PRODUCTLIST">
              {(provided, snapshot) => (
                <div
                  className={`${
                    snapshot.isDraggingOver
                      ? "border-cyan-300 rounded-md border shadow-sm shadow-cyan-300"
                      : ""
                  } p-1`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {productList.map((product, productIndex) => (
                    <Product
                      productIndex={productIndex}
                      product={product}
                      key={product.id}
                      setShowModal={setShowModal}
                      setIndexToAdd={setIndexToAdd}
                      removeProduct={removeProduct}
                      removeVariant={removeVariant}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className={`flex flex-row-reverse`}>
            <button
              className={`transition p-2 rounded-md  opacity-75 hover:opacity-100 w-60
            text-green-600 border-2 border-green-600  hover:bg-green-600 hover:text-white`}
              type="button"
              title={"Add Discount"}
              onClick={addEmptyProduct}
            >
              {"Add Discount"}
            </button>
          </div>
          {/* <p>{JSON.stringify(productList.length)}</p> */}
        </div>
        {showModal && (
          <AddProduct
            setShowModal={setShowModal}
            indexToAdd={indexToAdd}
            addSelectedProductsAtIndex={addSelectedProductsAtIndex}
          />
        )}
      </div>
    </DragDropContext>
  );
};

export default HomePage;
