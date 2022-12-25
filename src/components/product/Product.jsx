import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd/dist/hooks";

import { ReactComponent as Close } from "../../icons/close_fill.svg";
import { ReactComponent as Edit } from "../../icons/edit_fill.svg";
import { ReactComponent as Drag } from "../../icons/drag_indicator.svg";
import { ReactComponent as Expand } from "../../icons/expand_more.svg";
import { ReactComponent as Collaps } from "../../icons/expand_less.svg";

const Product = ({ id, title, setShowModal, product }) => {
  const [showVarient, setShowVarient] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PRODUCT",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "PRODUCT",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

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
    <div className={`${isDragging ? "border-green-500" : ""} border rounded`} ref={drag}>
      <div className="flex items-center ">
        <Drag className="w-7 h-7 pt-px cursor-pointer fill-zinc-500 hover:fill-black" />
        <div className="flex w-full items-center justify-between bg-white rounded-md px-6 mx-2">
          <p className="w-full text-zinc-500">{title}</p>
          <div
            className="fill-green-700 scale-75 hover:bg-zinc-100 p-2 rounded cursor-pointer"
            onClick={() => {
              setShowModal(true);
            }}
          >
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
            {product.variants.map((variant) => (
              <Varient varient={variant} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Product;