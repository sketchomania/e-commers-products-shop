import axios from "axios";
import { useEffect, useState } from "react";

const url = `https://stageapibc.monkcommerce.app/admin/shop/product`;

export const useFetchProducts = (searchTerm, pageNumber) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setProducts([]);
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    let cancelRequest;

    axios({
      method: "GET",
      url: url,
      params: { search: searchTerm, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancelRequest = c)),
    })
      .then((response) => {
        const data = response.data;
        const dataArr = [...data];
        // console.log("data: ", dataArr);
        // console.log("data: ", ...response.data);
        setProducts((prevProducts) => {
          return [...prevProducts, ...dataArr];
        });
        setHasMore(response.data.length > 0);
        setIsLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setIsError(true);
      });

    return () => cancelRequest();
  }, [searchTerm, pageNumber]);

  return { isLoading, isError, products, hasMore };
};
