import React from "react";

import { ReactComponent as Search } from "../../icons/search.svg";
import { ReactComponent as Close } from "../../icons/close_fill.svg";

const AddProduct = () => {
  const response = [
    {
      id: 77,
      title: "Fog Linen Chambray Towel - Beige Stripe",
      variants: [
        {
          id: 1,
          product_id: 77,
          title: "XS / Silver",
          price: "49",
        },
        {
          id: 2,
          product_id: 77,
          title: "S / Silver",
          price: "49",
        },
        {
          id: 3,
          product_id: 77,
          title: "M / Silver",
          price: "49",
        },
      ],
      image: {
        id: 266,
        product_id: 77,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/77/images/266/foglinenbeigestripetowel1b.1647248662.386.513.jpg?c=1",
      },
    },
    {
      id: 80,
      title: "Orbit Terrarium - Large",
      variants: [
        {
          id: 64,
          product_id: 80,
          title: "Default Title",
          price: "109",
        },
      ],
      image: {
        id: 272,
        product_id: 80,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/80/images/272/roundterrariumlarge.1647248662.386.513.jpg?c=1",
      },
    },
  ];
  const checkboxStyle = `w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 cursor-pointer`;

  return (
    <div className="bg-white flex flex-col border w-2/5 rounded-lg text-sm">
      <div className="p-3 flex items-center border-b justify-between text-base font-medium">
        <h2>Add products</h2>
        <Close className="scale-90 fill-zinc-500 hover:fill-black cursor-pointer" />
      </div>
      <div className="m-3 flex items-center border rounded ">
        <Search className="scale-75 fill-zinc-500 hover:fill-black cursor-pointer" />
        <input placeholder="Search product" className="w-full outline-none bg-transparent"></input>
      </div>
      <div>
        {response.map((product) => (
          <div className="border-y cursor-pointer">
            <div className="flex px-4 py-2 items-center hover:bg-zinc-100">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                checked
                className={checkboxStyle}
              />
              <img src={product.image.src} className="w-9 h-9 border rounded mx-4" />
              <p>{product.title}</p>
            </div>
            <div>
              {product.variants.map((variant) => (
                <div className="flex justify-between items-center hover:bg-zinc-100 border-t py-2 px-5 text-xs">
                  <div className="flex items-center">
                    <input
                      id="react-checkbox"
                      type="checkbox"
                      value=""
                      // checked
                      className={`${checkboxStyle} mx-7`}
                    />
                    <p>{variant.title}</p>
                  </div>

                  <p>₹{variant.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between border">
        <p>product selected</p>
        <div>
          <button className="px-4 border mx-1">Cancel</button>
          <button className="px-4 border mx-1">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
