import React, { useState } from "react";

import Product from "./product/Product";
import AddProduct from "./addProduct/AddProduct";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const swapElements = (arrayToSwap, index1, index2) => {
  arrayToSwap[index1] = arrayToSwap.splice(index2, 1, arrayToSwap[index1])[0];
};

const HomePage = () => {
  const [productList, setProductList] = useState([
    {
      id: 88,
      title: "[Sample] Chemex Coffeemaker 3 Cup",
      body_html:
        "<p>The Chemex Coffeemaker was created in 1939 by famed inventor Peter J. Schlumbohm\n                                </p>\n<p>\n                                Applying his knowledge of filtration and extraction, Mr. Schlumbohm was able to craft the vessel that would pour the perfect cup of joe. The angles of the drip, thickness of the filter paper and the air vent chamber allow coffee to brew in a specified time and release gases that are usually trapped in by other brewing methods. This results in a smooth, bitter-free cup in less than four minutes.\n                                </p>\n<p>\n                                Made of labratory heatproof borosilicate glass with a simple wooden handle, the Chemex coffeemaker's design has been inducted in to the permanent collection of The Museum of Modern Art.\n                                </p>\n<p>\n                                Measures 21 cm h x 7.6 cm dia/8.25 in h x 3 in dia\n                                </p>\n<p>\n                                Capacity 473 ml/1 Pint</p>",
      handle: "chemex-coffeemaker-3-cup",
      variants: [
        {
          id: 67,
          product_id: 88,
          title: "Default Title",
          inventory_policy: "deny",
          price: "49.5",
          inventory_management: "shopify",
          inventory_quantity: 2001,
          admin_graphql_api_id: "gid://shopify/Variant/67",
        },
      ],
      image: {
        id: 292,
        product_id: 88,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/292/3cupchemex5.1647248662.386.513.jpg?c=1",
      },
      admin_graphql_api_id: "gid://shopify/Product/88",
      status: "active",
    },
    {
      id: 93,
      title: "[Sample] 1 L Le Parfait Jar",
      body_html:
        '<p>When translated Le Parfait means "the perfect one" - and that\'s just what this air-tight jar is. Designed for canning, these jars will ensure your harvest does not spoil, but is kept well-preserved for those cold winter months that lie ahead. Also can be used to store grains, beans and spices. Lid easily removes for a thorough cleaning. May be frozen - just be sure to leave enough room for expansion. </p><p> 1 L/34 fl oz</p>',
      handle: "1-l-le-parfait-jar",
      options: [
        {
          product_id: 93,
          name: "Color",
          values: ["Blue", "Orange", "Silver", "Black"],
        },
        {
          product_id: 93,
          name: "Size",
          values: ["Small", "Medium", "Large"],
        },
      ],
      variants: [
        {
          id: 46,
          product_id: 93,
          title: "Silver / Small",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/46",
          option_values: [
            {
              id: 7,
              label: "Silver",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 95,
              label: "Small",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 47,
          product_id: 93,
          title: "Black / Small",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/47",
          option_values: [
            {
              id: 8,
              label: "Black",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 95,
              label: "Small",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 57,
          product_id: 93,
          title: "Orange / Large",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/57",
          option_values: [
            {
              id: 13,
              label: "Orange",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 97,
              label: "Large",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
      ],
      image: {
        id: 311,
        product_id: 93,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/93/images/311/leparfaitmedium3.1647248662.386.513.jpg?c=1",
      },
      admin_graphql_api_id: "gid://shopify/Product/93",
      status: "active",
    },
  ]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const isOver = false;

  const addedProduct = (id) => {
    console.log(id);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log(result);
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return;

    let add,
      active = productList;

    

    if (source.droppableId === "ProductList" && destination.droppableId === "ProductList") {
      // prevEle =
      add = active[source.index];
      // remove from that index
      // active.splice(source.index, 1);
      // active.slice(destination.index, 0, add);
      swapElements(active, source.index, destination.index);
    }
    // add
    // if (destination.droppableId === "ProductList") {
    //   active.slice(destination.index, 0, add);
    // }

    setProductList(active);
  };

  //arr.splice(index, 0, item);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="h-screen w-full">
        <div className="bg-zinc-100 h-screen mx-auto w-3/5 border px-8">
          <p className="text-4xl pt-8 text-yellow-500 font-bold">Add Products</p>
          <div className="pt-8 pb-2 px-12">
            <div className="flex justify-between">
              <p className="text-xl py-3 text-gray-400 font-semibold m-2">Product</p>
              <p className="text-xl py-3 text-gray-400 font-semibold m-2">Discount</p>
            </div>
            <Droppable droppableId="ProductList">
              {(provided) => (
                <div
                  className={`${isOver ? "border-cyan-400" : ""} border-2 p-1`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {productList.map((product, index) => (
                    <Product
                      index={index}
                      id={product.id}
                      title={product.title}
                      product={product}
                      setShowModal={setShowModal}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className={`flex flex-row-reverse`}>
            <button
              className={`transition p-2.5 rounded-md  opacity-75 hover:opacity-100 w-80
            text-green-600 border-2 border-green-600  hover:bg-green-500 hover:text-white`}
              type="button"
              title={"Add Discount"}
              onClick={() => {}}
            >
              {"Add Discount"}
            </button>
          </div>
        </div>
        {showModal && (
          <AddProduct
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            setShowModal={setShowModal}
            productList={productList}
            setProductList={setProductList}
          />
        )}
      </div>
    </DragDropContext>
  );
};

export default HomePage;
