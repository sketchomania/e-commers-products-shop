import React, { useRef, useState, useCallback } from "react";

import { ReactComponent as Search } from "../../icons/search.svg";
import { ReactComponent as Close } from "../../icons/close_fill.svg";
import Spinner from "../utils/Spinner";
import { useFetchProducts } from "../../hook/useFetchProducts";

const AddProduct = ({ setShowModal, indexToAdd, addSelectedProductsAtIndex }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  let proArr = [];
  const checkboxStyle = `w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 cursor-pointer`;
  // const [selectedProductsArray, setSelectedProductsArray] = useState();

  const handleSearchProduct = (e) => {
    setSearchTerm(e.target.value);
    setPageNumber(1);
  };

  const { isLoading, isError, products, hasMore } = useFetchProducts(searchTerm, pageNumber);
  // undefind initially
  const observer = useRef();
  const lastProductElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          // console.log("Visible", node);
        }
      });
      if (node) observer.current.observe(node);
      // console.log(node);
    },
    [isLoading, hasMore]
  );

  const cancelHandler = () => {
    setShowModal(false);
    // setSelectedProductsArray([]);
  };

  // renderProduct
  const RenderProduct = ({ productData, index, lastProductElementRef }) => {
    const [selectedVariant, setSelectedVariant] = useState([]);
    const [isProductChecked, setIsProductChecked] = useState(
      selectedVariant.length === productData.variants.length
    );
    let prodObj = {
      index: index,
      id: productData.id,
      title: productData.title,
      variants: [],
    };

    const toggleProductChecked = () => {
      setIsProductChecked(!isProductChecked);
      // setIsProductChecked(selectedVariant.length === productData.variants.length);

      if (!!isProductChecked) {
        if (selectedVariant.length === 0) {
          return;
        }
        setSelectedVariant([]);
        prodObj.variants = [];

        // remove product if no variant is selected
        proArr.splice(prodObj.index, 1);
      } else if (!isProductChecked) {
        const variantArr = productData.variants.map((variant) => {
          return {
            id: variant.id,
            product_id: variant.product_id,
            title: variant.title,
          };
        });
        if (selectedVariant.length === productData.variants.length) {
          return;
        }
        setSelectedVariant(variantArr);
        prodObj.variants = variantArr;
        proArr[prodObj.index] = prodObj;
      }
    };

    return (
      <>
        <div className="border-y cursor-pointer" ref={lastProductElementRef}>
          <div
            className="flex px-4 py-2 items-center hover:bg-zinc-100"
            onClick={toggleProductChecked}
          >
            <input
              id="react-checkbox"
              type="checkbox"
              value=""
              onChange={() => {}}
              checked={!!(selectedVariant.length === productData.variants.length)}
              className={checkboxStyle}
            />
            <img src={productData.image.src} alt="image" className="w-9 h-9 border rounded mx-4" />
            <p>{`${productData.title}`}</p>
            {/* <p className="text-xs scale-75">{`index: ${index} ${productData.title}`}</p> */}
            {/* <p className="text-xs scale-75">{`${JSON.stringify(proArr)}`}</p> */}
          </div>
          <div>
            {productData.variants.map((variant) => (
              <RenderVariant
                key={variant.id}
                variantData={variant}
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
                prodObj={prodObj}
              />
            ))}
          </div>
        </div>
      </>
    );
  };

  // renderVariant
  const RenderVariant = ({ variantData, selectedVariant, setSelectedVariant, prodObj }) => {
    const [isVariantChecked, setIsVariantChecked] = useState(
      selectedVariant.filter((item) => item.id === variantData.id).length > 0
    );

    const toggleChecked = () => {
      setIsVariantChecked(!isVariantChecked);
      // setIsVariantChecked(!(selectedVariant.filter((item) => item.id === variantData.id).length > 0));

      if (!!isVariantChecked) {
        const remainingVariants = selectedVariant.filter((item) => item.id !== variantData.id);
        setSelectedVariant(remainingVariants);
        prodObj.variants = remainingVariants;

        proArr[prodObj.index] = prodObj;
        // remove product if no variant is selected
        if (remainingVariants.length < 1) {
          proArr.splice(prodObj.index, 1);
        }
      } else if (!isVariantChecked) {
        const variantObj = {
          id: variantData.id,
          product_id: variantData.product_id,
          title: variantData.title,
        };
        if (selectedVariant.filter((item) => item.id === variantData.id).length < 1) {
          setSelectedVariant([...selectedVariant, variantObj]);
          prodObj.variants = [...selectedVariant, variantObj];

          proArr[prodObj.index] = prodObj;
        }
      }
    };

    return (
      <div
        className="flex justify-between items-center hover:bg-zinc-100 border-t py-2 px-5 text-xs"
        onClick={toggleChecked}
      >
        <div className="flex items-center">
          <input
            id="react-checkbox"
            type="checkbox"
            name={variantData.title}
            onChange={() => {}}
            checked={selectedVariant.filter((item) => item.id === variantData.id).length > 0}
            // checked={!!isVariantChecked}
            className={`${checkboxStyle} mx-7`}
          />
          {/* <p>{`${isVariantChecked}`}</p> */}
          <p>{variantData.title}</p>
        </div>

        <p>₹{variantData.price}</p>
      </div>
    );
  };

  // addProduct
  return (
    <div className="absolute flex items-center justify-center top-0 left-0 h-screen w-screen ">
      <div className="fixed top-0 left-0 h-full w-full bg-zinc-900 bg-opacity-60 z-10"></div>

      <div className="bg-white z-10 flex flex-col border w-2/5 rounded-lg text-sm">
        <div className="p-3 flex items-center border-b justify-between text-base font-medium">
          <h2>Add products </h2>
          {/* <h2> at {indexToAdd + 1}</h2> */}
          <Close
            className="scale-90 fill-zinc-500 hover:fill-black cursor-pointer"
            onClick={cancelHandler}
          />
        </div>
        <div className="m-3 flex items-center border rounded ">
          <Search className="scale-75 fill-zinc-500 hover:fill-black cursor-pointer" />
          <input
            placeholder="Search product"
            type="text"
            value={searchTerm}
            onChange={handleSearchProduct}
            className="w-full outline-none bg-transparent"
          ></input>
        </div>
        <div className="h-96 overflow-y-scroll overflow-x-hidden">
          {products.map((product, index) => {
            if (products.length === index + 1) {
              return (
                <RenderProduct
                  // ref={lastProductElementRef}
                  lastProductElementRef={lastProductElementRef}
                  key={product.id}
                  productData={product}
                  index={index}
                />
              );
            } else {
              return <RenderProduct key={product.id} productData={product} index={index} />;
            }
          })}
          {!isError && isLoading && <Spinner />}
          {isError && (
            <p className="text-center p-2 text-zinc-500">{`No more products found: "${searchTerm}"`}</p>
          )}
        </div>
        <div className="flex justify-between p-2">
          <p>{`product selected`}</p>
          {/* <p>{`${proArr.filter((i) => i !== null).length} product selected`}</p> */}
          <div>
            <button
              className="px-4 p-0.5 border mx-1 rounded hover:bg-zinc-200"
              onClick={cancelHandler}
            >
              Cancel
            </button>
            <button
              className=" bg-green-700 px-4 p-0.5 hover:text-white rounded opacity-75 hover:opacity-100"
              title={"Add Product"}
              onClick={() => {
                let narr = proArr.filter((item) => item !== null);
                // setSelectedProductsArray(narr);
                addSelectedProductsAtIndex(indexToAdd, narr);
                setShowModal(false);
              }}
            >
              {"Add"}
            </button>
          </div>
        </div>
        {/* <p className="text-xs scale-75">
          {"selectedProductsArray"}
          {JSON.stringify(selectedProductsArray)}
        </p> */}
      </div>
    </div>
  );
};

export default AddProduct;
