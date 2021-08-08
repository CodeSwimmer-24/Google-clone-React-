import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "8139465ce34417e16";

const useGoogleSearch = (user) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=
        ${API_KEY}&cx=${CONTEXT_KEY}&q=${user}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [user]);

  return { data };
};

export default useGoogleSearch;
