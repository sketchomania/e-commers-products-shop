import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

import { ReactComponent as Close } from "../../icons/close_fill.svg";
import { ReactComponent as Edit } from "../../icons/edit_fill.svg";
import { ReactComponent as Drag } from "../../icons/drag_indicator.svg";
import { ReactComponent as Expand } from "../../icons/expand_more.svg";
import { ReactComponent as Collaps } from "../../icons/expand_less.svg";
import Variant from "./Variant";

const Product = ({
  setShowModal,
  product,
  productIndex,
  setIndexToAdd,
  removeProduct,
  removeVariant,
}) => {
  const [showVarient, setShowVarient] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [showDiscountDropdown, setShowDiscountDropdown] = useState(false);
  const [showFlatDiscount, setShowFlatDiscount] = useState(false);
  const isDragging = false;

  // const Variant = ({ variantIndex, variant, removeVariant, productIndex }) => {
  //   const [showDiscount, setShowDiscount] = useState(false);
  //   const [showDiscountDropdown, setShowDiscountDropdown] = useState(false);
  //   const [showFlatDiscount, setShowFlatDiscount] = useState(false);

  //   return (
  //     <div className="flex items-center pl-14 pb-1 text-xs text-zinc-500">
  //       <Drag className="w7 h-7 mr-1 pt-px cursor-pointer fill-zinc-500 hover:fill-black" />
  //       {/* <p className="">{`${index + 1}.`}</p> */}
  //       <p className="bg-white shadow-md w-56 px-4 py-1 mx-1 border rounded-full">
  //         {variant.title}
  //       </p>
  //       {showDiscount ? (
  //         <div className="flex items-center justify-between">
  //           <p
  //             contentEditable
  //             suppressContentEditableWarning={true}
  //             className="bg-white shadow-md cursor-text outline-none  py-1 px-4 rounded-full"
  //           >{`20`}</p>
  //           <div className="relative">
  //             <p
  //               className="mx-1 bg-white shadow-md cursor-pointer  w-16 py-1 px-4 rounded-full"
  //               onClick={() => {
  //                 setShowDiscountDropdown(true);
  //               }}
  //             >{`${showFlatDiscount ? "flat off" : "% off"}`}</p>
  //             <div>
  //               {showDiscountDropdown && (
  //                 <>
  //                   <div
  //                     className="fixed h-full w-full top-0 left-0 z-10 cursor-default"
  //                     onClick={() => {
  //                       setShowDiscountDropdown(false);
  //                     }}
  //                   ></div>
  //                   <div className="right-4 absolute z-10 flex flex-col justify-around shadow-md shadow-zinc-400 border-t border-t-zinc-100 text-zinc-700 py-1 w-max bg-white rounded-md cursor-pointer text-xs">
  //                     <h3
  //                       className="hover:bg-zinc-200 px-2 py-0.5"
  //                       onClick={() => {
  //                         setShowFlatDiscount(true);
  //                         setShowDiscountDropdown(false);
  //                       }}
  //                     >{`flat off`}</h3>
  //                     <h3
  //                       className="hover:bg-zinc-200 px-2 py-0.5"
  //                       onClick={() => {
  //                         setShowFlatDiscount(false);
  //                         setShowDiscountDropdown(false);
  //                       }}
  //                     >{`% off`}</h3>
  //                   </div>
  //                 </>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       ) : (
  //         <button
  //           className="shadow-lg text-white bg-green-700 py-1 px-2 rounded-full opacity-80 hover:opacity-100"
  //           title={"Add Discount"}
  //           onClick={() => {
  //             setShowDiscount(true);
  //           }}
  //         >
  //           {"Add Discount"}
  //         </button>
  //       )}
  //       <div
  //         className="fill-zinc-400 hover:fill-black scale-75 cursor-pointer"
  //         onClick={() => {
  //           removeVariant(productIndex, variantIndex);
  //         }}
  //       >
  //         <Close />
  //       </div>
  //     </div>
  //   );
  // };

  // product
  return (
    <Draggable draggableId={product.id.toString()} key={product.id} index={productIndex}>
      {(provided) => (
        <div
          className={`${isDragging ? "border-green-500" : ""} border-b mb-2 pb-1 rounded`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="flex items-center text-xs text-zinc-500">
            <Drag className="w-10 h-7 pt-px cursor-pointer fill-zinc-500 hover:fill-black" />
            <p className="">{`${productIndex + 1}.`}</p>
            <div className="flex w-full items-center justify-between shadow-md bg-white rounded-md px-4 mx-2">
              <p className="w-full">{`${product.title}`}</p>
              <div
                className="fill-green-700 scale-75 hover:bg-zinc-100 p-1 rounded cursor-pointer"
                onClick={() => {
                  setShowModal(true);
                  setIndexToAdd(productIndex);
                }}
              >
                <Edit />
              </div>
            </div>

            {showDiscount ? (
              <div className="flex items-center justify-between">
                <p
                  contentEditable
                  suppressContentEditableWarning={true}
                  className="shadow-md bg-white p-1.5 rounded-md w-16 text-center cursor-text outline-none"
                >{`10`}</p>
                <div className="relative">
                  <p
                    className="mx-1 shadow-md bg-white p-1.5 rounded-md w-16 text-center cursor-pointer"
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
                className="text-white bg-green-700 p-2 rounded-md w-60 h-full opacity-80 hover:opacity-100"
                title={"Add Discount"}
                onClick={() => {
                  setShowDiscount(true);
                }}
              >
                {"Add Discount"}
              </button>
            )}

            {
              <div
                className="fill-zinc-400 hover:fill-black scale-90 cursor-pointer"
                onClick={() => {
                  removeProduct(productIndex);
                }}
              >
                <Close />
              </div>
            }
          </div>
          {product?.variants.length < 2 ? null : (
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
                  {product?.variants.map((variant, variantIndex) => (
                    <Variant
                      variantIndex={variantIndex}
                      variant={variant}
                      removeVariant={removeVariant}
                      productIndex={productIndex}
                    />
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default Product;
