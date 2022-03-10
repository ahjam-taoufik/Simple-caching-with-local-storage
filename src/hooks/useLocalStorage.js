const useLocalStorage = () => {
    const get = (url) => JSON.parse(localStorage.getItem(url)) || null;
    const set = (url, data) => localStorage.setItem(url, JSON.stringify(data));
  
    return {
      get,
      set,
    };
  };
  
  export default useLocalStorage;