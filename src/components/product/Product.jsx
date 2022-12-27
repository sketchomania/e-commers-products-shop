import React, { useState } from "react";

import { ReactComponent as Close } from "../../icons/close_fill.svg";
import { ReactComponent as Edit } from "../../icons/edit_fill.svg";
import { ReactComponent as Drag } from "../../icons/drag_indicator.svg";
import { ReactComponent as Expand } from "../../icons/expand_more.svg";
import { ReactComponent as Collaps } from "../../icons/expand_less.svg";
import { Draggable } from "react-beautiful-dnd";

const Product = ({ setShowModal, product, index, setIndexToAdd }) => {
  const [showVarient, setShowVarient] = useState(false);
  const isDragging = false;

  const Varient = ({ varient }) => {
    return (
      <div className="flex items-center pl-16 pr-2 border">
        <Drag className="w-7 h-7 mr-1 pt-px cursor-pointer fill-zinc-500 hover:fill-black" />
        <p className="bg-white px-4 m-2 w-full rounded-full">{varient.title}</p>
        {/* <p className="bg-white px-4 m-2 rounded-full">20</p>
        <p className="bg-white px-4 m-2 rounded-full">% Off</p> */}
        <Close className="fill-zinc-500 hover:fill-black" />
      </div>
    );
  };
  return (
    <Draggable draggableId={product.id.toString()} key={product.id} index={index}>
      {(provided) => (
        <div
          className={`${isDragging ? "border-green-500" : ""} border-b rounded`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="flex items-center text-xs text-zinc-500">
            <Drag className="w-10 h-7 pt-px cursor-pointer fill-zinc-500 hover:fill-black" />
            <p className="">{`${index}.`}</p>
            <div className="flex w-full items-center justify-between shadow-md bg-white rounded-md px-4 mx-2">
              <p className="w-full">{`${product ? product.title : "Select Product"}`}</p>
              <div
                className="fill-green-700 scale-75 hover:bg-zinc-100 p-1 rounded cursor-pointer"
                onClick={() => {
                  setShowModal(true);
                  setIndexToAdd(index);
                }}
              >
                <Edit />
              </div>
            </div>

            <button
              className="text-white bg-green-700 p-2 rounded-md w-60 h-full opacity-80 hover:opacity-100"
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
                {product?.variants.map((variant) => (
                  <Varient varient={variant} />
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Product;
