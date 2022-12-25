import React from "react";

import { ReactComponent as Search } from "../../icons/search.svg";
import { ReactComponent as Close } from "../../icons/close_fill.svg";

const AddProduct = ({ selectedProduct, setSelectedProduct, setShowModal }) => {
  const response = [
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
      images: [
        {
          id: 292,
          product_id: 88,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/292/3cupchemex5.1647248662.386.513.jpg?c=1",
        },
        {
          id: 293,
          product_id: 88,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/293/chemex3cupfilters1.1647248662.386.513.jpg?c=1",
        },
        {
          id: 294,
          product_id: 88,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/294/3cupchemex2.1647248662.386.513.jpg?c=1",
        },
        {
          id: 295,
          product_id: 88,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/295/3cupchemex1.1647248662.386.513.jpg?c=1",
        },
        {
          id: 296,
          product_id: 88,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/296/3cupchemex4.1647248662.386.513.jpg?c=1",
        },
        {
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/292/3cupchemex5.1647248662.386.513.jpg?c=1",
        },
      ],
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
      images: [
        {
          id: 311,
          product_id: 93,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/93/images/311/leparfaitmedium3.1647248662.386.513.jpg?c=1",
        },
        {
          id: 312,
          product_id: 93,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/93/images/312/leparfaitmedium4.1647248662.386.513.jpg?c=1",
        },
        {
          id: 313,
          product_id: 93,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/93/images/313/leparfaitmedium1.1647248662.386.513.jpg?c=1",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/93",
      status: "active",
    },
    {
      id: 104,
      title: "[Sample] Utility Caddy",
      body_html:
        "<p>This powder coated steel utility caddy ensures your cleaning essentials are stowed away in one spot ready for your household chores. Brushes, cloths, liquid soaps can all easily be stashed away. Also ideal to be used as a garden caddy to easily grab from the shed for a days work. Works well as a mop bucket too. The wood carrying handle ensures a comfortable grip when toting it from room to room.</p>\n<p>Measures 19 h x 36 w x 20 dia cm/7.5 h x 14.1 w x 7.8 dia in</p>",
      handle: "utility-caddy",
      variants: [
        {
          id: 72,
          product_id: 104,
          title: "Default Title",
          inventory_policy: "deny",
          price: "45.95",
          admin_graphql_api_id: "gid://shopify/Variant/72",
        },
      ],
      image: {
        id: 336,
        product_id: 104,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/104/images/336/utilitybucket1.1647248662.386.513.jpg?c=1",
      },
      images: [
        {
          id: 336,
          product_id: 104,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/104/images/336/utilitybucket1.1647248662.386.513.jpg?c=1",
        },
        {
          id: 337,
          product_id: 104,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/104/images/337/utilitybucket2.1647248662.386.513.jpg?c=1",
        },
        {
          id: 338,
          product_id: 104,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/104/images/338/utilitybucket4.1647248662.386.513.jpg?c=1",
        },
        {
          id: 339,
          product_id: 104,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/104/images/339/utilitybucket3.1647248662.386.513.jpg?c=1",
        },
        {
          id: 340,
          product_id: 104,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/104/images/340/utilitybucket6.1647248662.386.513.jpg?c=1",
        },
        {
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/104/images/336/utilitybucket1.1647248662.386.513.jpg?c=1",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/104",
      status: "active",
    },
    {
      id: 113,
      title: "Copy of 3-4th Pant",
      body_html:
        '<div class="accordion">\n<h2 class="accordion-title">FEATURES</h2>\n</div>\n<ul>\n<li>Comfortable</li>\n<li>Wear Sock-Free</li>\n<li>Minimizes Odour</li>\n<li>Made with Natural &amp; Recycled Materials</li>\n<li>Machine Washable</li>\n</ul>',
      handle: "copy-of-3-4th-pant",
      options: [
        {
          product_id: 113,
          name: "Material",
          values: ["Cotton", "Synthetic"],
        },
        {
          product_id: 113,
          name: "Color",
          values: ["Red", "Green", "Blue"],
        },
      ],
      variants: [
        {
          id: 85,
          product_id: 113,
          title: "Cotton / Red",
          inventory_policy: "deny",
          price: "1100.1",
          inventory_management: "shopify",
          inventory_quantity: 390,
          admin_graphql_api_id: "gid://shopify/Variant/85",
          option_values: [
            {
              id: 103,
              label: "Cotton",
              option_id: 115,
              option_display_name: "Material",
            },
            {
              id: 105,
              label: "Red",
              option_id: 116,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 88,
          product_id: 113,
          title: "Synthetic / Red",
          inventory_policy: "deny",
          price: "1100.1",
          inventory_management: "shopify",
          inventory_quantity: 390,
          admin_graphql_api_id: "gid://shopify/Variant/88",
          option_values: [
            {
              id: 104,
              label: "Synthetic",
              option_id: 115,
              option_display_name: "Material",
            },
            {
              id: 105,
              label: "Red",
              option_id: 116,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 90,
          product_id: 113,
          title: "Synthetic / Blue",
          inventory_policy: "deny",
          price: "1100.1",
          inventory_management: "shopify",
          inventory_quantity: 390,
          admin_graphql_api_id: "gid://shopify/Variant/90",
          option_values: [
            {
              id: 104,
              label: "Synthetic",
              option_id: 115,
              option_display_name: "Material",
            },
            {
              id: 107,
              label: "Blue",
              option_id: 116,
              option_display_name: "Color",
            },
          ],
        },
      ],
      image: {
        id: 381,
        product_id: 113,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/113/images/381/3-4th_Image_23jpeg__96079.1647455752.1280.1280__12893.1648114780.386.513.jpg?c=1",
      },
      images: [
        {
          id: 379,
          product_id: 113,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/113/images/379/3-4th_Image_2__88161.1647455752.1280.1280__55345.1648114780.386.513.jpg?c=1",
        },
        {
          id: 380,
          product_id: 113,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/113/images/380/3-4th_Image_1__21264.1647455752.1280.1280__29818.1648114780.386.513.jpg?c=1",
        },
        {
          id: 381,
          product_id: 113,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/113/images/381/3-4th_Image_23jpeg__96079.1647455752.1280.1280__12893.1648114780.386.513.jpg?c=1",
        },
        {
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/product_images/attribute_rule_images/1_source_1648122147.png",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/113",
      status: "active",
    },
    {
      id: 415,
      title: "Copy of broken fire",
      handle: "copy-of-broken-fire",
      variants: [
        {
          id: 395,
          product_id: 415,
          title: "Default Title",
          inventory_policy: "deny",
          price: "10",
          admin_graphql_api_id: "gid://shopify/Variant/395",
        },
      ],
      image: {},
      admin_graphql_api_id: "gid://shopify/Product/415",
      status: "active",
    },
    {
      id: 422,
      title: "broken fire",
      handle: "broken-fire",
      variants: [
        {
          id: 402,
          product_id: 422,
          title: "Default Title",
          inventory_policy: "deny",
          price: "10",
          admin_graphql_api_id: "gid://shopify/Variant/402",
        },
      ],
      image: {},
      admin_graphql_api_id: "gid://shopify/Product/422",
      status: "active",
    },
  ];
  const checkboxStyle = `w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 cursor-pointer`;

  return (
    <div className="absolute flex items-center justify-center top-0 left-0 h-screen w-screen ">
      <div
        className="fixed top-0 left-0 h-full w-full bg-zinc-900 bg-opacity-60 z-10"
        onClick={() => {
          console.log("Edit Label Backdrop clicked");
        }}
      ></div>

      <div className="bg-white z-10 flex flex-col border w-2/5 rounded-lg text-sm">
        <div className="p-3 flex items-center border-b justify-between text-base font-medium">
          <h2>Add products</h2>
          <Close className="scale-90 fill-zinc-500 hover:fill-black cursor-pointer" />
        </div>
        <div className="m-3 flex items-center border rounded ">
          <Search className="scale-75 fill-zinc-500 hover:fill-black cursor-pointer" />
          <input
            placeholder="Search product"
            className="w-full outline-none bg-transparent"
          ></input>
        </div>
        <div className="h-96 overflow-y-scroll overflow-x-hidden">
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
            <button
              className="px-4 border mx-1"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </button>
            <button className="px-4 border mx-1">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
