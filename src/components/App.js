
import React from "react";
import './../styles/App.css';
import {useState,useEffect} from "react";
const App = () => {
 const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json();
      setData(result); // Update state with fetched data
    } catch (err) {
      setError(err.message); // Update state with error message
    } finally {
      setLoading(false); // Update state to indicate loading is done
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default App
