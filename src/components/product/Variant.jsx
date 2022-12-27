import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

import { ReactComponent as Close } from "../../icons/close_fill.svg";
import { ReactComponent as Drag } from "../../icons/drag_indicator.svg";

const Variant = ({ variantIndex, variant, removeVariant, productIndex }) => {
  const [showDiscount, setShowDiscount] = useState(false);
  const [showDiscountDropdown, setShowDiscountDropdown] = useState(false);
  const [showFlatDiscount, setShowFlatDiscount] = useState(false);

  return (
    <Draggable draggableId={variant.id.toString()} key={variant.id} index={variantIndex}>
      {(provided) => (
        <div
          className="flex items-center pl-14 pb-1 text-xs text-zinc-500"
          {...provided.dragHandleProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Drag className="w7 h-7 mr-1 pt-px cursor-pointer fill-zinc-500 hover:fill-black" />
          <p>{`${variantIndex + 1}.`}</p>
          <p className="bg-white shadow-md w-56 px-4 py-1 mx-1 border rounded-full">
            {variant.title}
          </p>
          {showDiscount ? (
            <div className="flex items-center justify-between">
              <p
                contentEditable
                suppressContentEditableWarning={true}
                className="bg-white shadow-md cursor-text outline-none  py-1 px-4 rounded-full"
              >{`20`}</p>
              <div className="relative">
                <p
                  className="mx-1 bg-white shadow-md cursor-pointer  w-16 py-1 px-4 rounded-full"
                  onClick={() => {
                    setShowDiscountDropdown(true);
                  }}
                >{`${showFlatDiscount ? "flat off" : "% off"}`}</p>
                <div>
                  {showDiscountDropdown && (
                    <>
                      <div
                        className="fixed h-full w-full top-0 left-0 z-10 cursor-default"
                        onClick={() => {
                          setShowDiscountDropdown(false);
                        }}
                      ></div>
                      <div className="right-4 absolute z-10 flex flex-col justify-around shadow-md shadow-zinc-400 border-t border-t-zinc-100 text-zinc-700 py-1 w-max bg-white rounded-md cursor-pointer text-xs">
                        <h3
                          className="hover:bg-zinc-200 px-2 py-0.5"
                          onClick={() => {
                            setShowFlatDiscount(true);
                            setShowDiscountDropdown(false);
                          }}
                        >{`flat off`}</h3>
                        <h3
                          className="hover:bg-zinc-200 px-2 py-0.5"
                          onClick={() => {
                            setShowFlatDiscount(false);
                            setShowDiscountDropdown(false);
                          }}
                        >{`% off`}</h3>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <button
              className="shadow-lg text-white bg-green-700 py-1 px-2 rounded-full opacity-80 hover:opacity-100"
              title={"Add Discount"}
              onClick={() => {
                setShowDiscount(true);
              }}
            >
              {"Add Discount"}
            </button>
          )}
          <div
            className="fill-zinc-400 hover:fill-black scale-75 cursor-pointer"
            onClick={() => {
              removeVariant(productIndex, variantIndex);
            }}
          >
            <Close />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Variant;
