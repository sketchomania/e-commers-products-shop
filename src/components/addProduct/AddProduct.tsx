import React from "react";

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

  return (
    <div className="bg-white flex flex-col border w-3/5 border-red-500 p-2">
      <div>
        <input placeholder="Search product" className="border p-1 w-full"></input>
      </div>
      <div>
        {response.map((product) => (
          <div className="border p-2">
            <div>
              <p>{product.title}</p>
            </div>
            <div>
              {product.variants.map((variant) => (
                <div className="flex justify-between border py-2  pl-20 pr-10">
                  <p>{variant.title}</p>
                  <p>{variant.price}</p>
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
