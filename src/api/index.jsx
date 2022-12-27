export const fetchProducts = async () => {
  // { setLoading, setError, setData }
  //   setLoading(true);
  try {
    const response = await fetch(
      "https://stageapibc.monkcommerce.app/admin/shop/product?search=F&page=1"
    );
    const data = await response.json();
    console.log("data length: ", data.lenght);
    // setData(data);
  } catch (error) {
    // setError(error);
  }
  //   setLoading(false);
};
