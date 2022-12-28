import axios from "axios";
import { useEffect, useState } from "react";

const url = `https://stageapibc.monkcommerce.app/admin/shop/product`;

export const useFetchProducts = (search, page) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    let cancelRequest;

    axios({
      method: "GET",
      url: url,
      params: { search: search, page: page },
      cancelToken: new axios.CancelToken((c) => (cancelRequest = c)),
    })
      .then((response) => {
        const data = response.data;
        // console.log("response", response, "data length: ", data.length, data);
        setProducts((prevProducts) => {
          return [...prevProducts, ...data];
        });
        setHasMore(response.data.length > 0);
        setIsLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setIsError(true);
      });

    return () => cancelRequest();
  }, [search, page]);

  return { isLoading, isError, products, hasMore };
};
