import React, { useState } from "react";

import { ReactComponent as Close } from "../../icons/close_fill.svg";
import { ReactComponent as Edit } from "../../icons/edit_fill.svg";
import { ReactComponent as Drag } from "../../icons/drag_indicator.svg";
import { ReactComponent as Expand } from "../../icons/expand_more.svg";
import { ReactComponent as Collaps } from "../../icons/expand_less.svg";

const Product = () => {
  const [showVarient, setShowVarient] = useState(false);
  const Varient = () => {
    return (
      <div className="flex items-center pl-16">
        <Drag className="w-7 h-7 mr-1 pt-px cursor-pointer fill-zinc-500 hover:fill-black" />
        <p className="bg-white px-4 m-2 w-60 rounded-full">varient</p>
        <p className="bg-white px-4 m-2 rounded-full">20</p>
        <p className="bg-white px-4 m-2 rounded-full">% Off</p>
        <Close className="fill-zinc-500 hover:fill-black" />
      </div>
    );
  };
  return (
    <div className="border">
      <div className="flex items-center ">
        <Drag className="w-7 h-7 pt-px cursor-pointer fill-zinc-500 hover:fill-black" />
        <div className="flex w-full items-center bg-white rounded-md px-6 mx-2">
          <input
            id="product"
            name="product"
            type="text"
            placeholder="Select Product"
            className="outline-none rounded-md bg-inherit border-none py-2 w-full"
            required
          />
          <div className="fill-green-700 scale-75 hover:bg-zinc-200 border p-2 rounded cursor-pointer">
            <Edit />
          </div>
        </div>

        <button
          className=" bg-green-700 p-2 rounded-md w-60 h-full opacity-75 hover:opacity-100"
          title={"Add Discount"}
        >
          {"Add Discount"}
        </button>
      </div>
      <div>
        <div
          className="flex flex-row-reverse text-sm text-blue-500 opacity-75 hover:opacity-100 cursor-pointer"
          onClick={() => {
            setShowVarient(!showVarient);
          }}
        >
          {showVarient ? (
            <Collaps className="fill-blue-500 scale-75" />
          ) : (
            <Expand className="fill-blue-500 scale-75" />
          )}
          <p>{showVarient ? "Hide" : "Show"} varients </p>
        </div>
        {showVarient && (
          <>
            <Varient />
            <Varient />
            <Varient />
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
