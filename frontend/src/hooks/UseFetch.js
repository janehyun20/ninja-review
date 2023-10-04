import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoarding] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoarding(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
        setLoarding(false);
      } catch (error) {
        setError(error);
        setLoarding(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    loading,
    error,
    data,
  };
};

export default useFetch;
