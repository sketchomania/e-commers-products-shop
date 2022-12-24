import React, { useState } from "react";
import Product from "./product/Product";
import AddProduct from "./addProduct/AddProduct";

const HomePage = () => {
  const [selectedProduct, setselectedProduct] = useState({});
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen w-full">
      <div className="bg-zinc-100 h-screen mx-auto w-3/5 border px-8">
        <p className="text-4xl pt-8 text-yellow-500 font-bold">Add Products</p>
        <div className="pt-8 pb-2 px-12">
          <div className="flex justify-between">
            <p className="text-xl py-3 text-gray-400 font-semibold m-2">Product</p>
            <p className="text-xl py-3 text-gray-400 font-semibold m-2">Discount</p>
          </div>

          <Product />
          <Product />
        </div>

        <div className="flex flex-row-reverse">
          <button
            className={`transition p-2.5 rounded-md  opacity-75 hover:opacity-100 w-80
          text-green-600 border-2 border-green-600  hover:bg-green-500 hover:text-white`}
            type="button"
            title={"Add Discount"}
          >
            {"Add Discount"}
          </button>
        </div>
      </div>
      <AddProduct />
    </div>
  );
};

export default HomePage;