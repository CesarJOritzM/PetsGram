import { useState, useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      window
        .fetch(url)
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          setLoading(false);
        });
    } catch (err) {
      setError(err);
    }
  }, []);

  return { data, error, loading };
};
