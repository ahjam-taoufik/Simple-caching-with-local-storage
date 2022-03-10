import { useState, useEffect } from 'react';
import axios from 'axios';
import useLocalStorage from './useLocalStorage';

const useRequest = (url) => {
  const [data, setData] = useState();
  const { get, set } = useLocalStorage();

  const getData = async () => {
    const cachedData = get(url);
    cachedData && setData(cachedData);

    const { data: responseData } = await axios.get(url);
    responseData && set(url, responseData);
    setData(responseData);
  };

  useEffect(() => {
    getData();
  }, []);

  const loading = !data;

  return {
    data,
    loading,
  };
};

export default useRequest;
